type VercelRequest = {
  method?: string
  body?: { query?: string } | string
}

type VercelResponse = {
  setHeader: (key: string, value: string) => void
  status: (code: number) => {
    json: (body: unknown) => void
    send: (body: string) => void
  }
}

type GraphqlListResponse = {
  data: {
    publication: {
      posts: {
        edges: Array<{
          node: {
            id: string
            title: string
            brief: string
            slug: string
            publishedAt: string
            coverImage: { url: string | null }
          }
        }>
      }
    }
  }
}

type GraphqlPostResponse = {
  data: {
    publication: {
      post: {
        title: string
        content: { html: string }
        reactionCount: number
        replyCount: number
      } | null
    }
  }
}

const DEFAULT_PUBLICATION_HOST = 'capsule-tech-and-code.hashnode.dev'
const HASHNODE_GQL_ENDPOINT = 'https://gql.hashnode.com/'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=900')

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body =
    typeof req.body === 'string'
      ? (JSON.parse(req.body) as { query?: string })
      : req.body

  const query = body?.query?.trim()
  if (!query) {
    return res.status(400).json({ error: 'Missing GraphQL query' })
  }

  const publicationHost = extractPublicationHost(query) ?? DEFAULT_PUBLICATION_HOST

  try {
    const directResponse = await fetchHashnodeGraphql(query)
    if (directResponse) {
      return res.status(200).json(directResponse)
    }
  } catch (error) {
    console.error('Primary Hashnode GraphQL request failed:', error)
  }

  try {
    if (isPostListQuery(query)) {
      const postCount = extractPostCount(query)
      const fallbackResponse = await fetchPostsFromRss(publicationHost, postCount)
      return res.status(200).json(fallbackResponse)
    }

    if (isSinglePostQuery(query)) {
      const slug = extractPostSlug(query)

      if (!slug) {
        return res.status(400).json({ error: 'Missing post slug in query' })
      }

      const fallbackResponse = await fetchPostFromHtml(publicationHost, slug)
      return res.status(200).json(fallbackResponse)
    }

    return res.status(502).json({
      error: 'Hashnode API unavailable and no fallback is defined for this query',
    })
  } catch (error) {
    console.error('Hashnode fallback failed:', error)
    return res.status(502).json({
      error: 'Unable to load Hashnode content',
    })
  }
}

async function fetchHashnodeGraphql(query: string) {
  const response = await fetch(HASHNODE_GQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': 'makviesainte-portfolio/1.0',
    },
    body: JSON.stringify({ query }),
    redirect: 'follow',
  })

  const contentType = response.headers.get('content-type') || ''
  if (!response.ok || !contentType.includes('application/json')) {
    return null
  }

  return response.json()
}

async function fetchPostsFromRss(
  publicationHost: string,
  postCount: number,
): Promise<GraphqlListResponse> {
  const xml = await fetchText(`https://${publicationHost}/rss.xml`)
  const items = extractXmlBlocks(xml, 'item').slice(0, postCount)

  const edges = items.map(item => {
    const link = decodeXml(extractTag(item, 'link') || '')
    const description = decodeXml(extractTag(item, 'description') || '')
    const coverImage =
      extractAttribute(item, 'media:content', 'url') ||
      extractAttribute(item, 'enclosure', 'url')

    return {
      node: {
        id: decodeXml(extractTag(item, 'guid') || link),
        title: stripHtml(decodeXml(extractTag(item, 'title') || 'Untitled')),
        brief: stripHtml(description),
        slug: extractSlugFromUrl(link),
        publishedAt: new Date(
          decodeXml(extractTag(item, 'pubDate') || Date.now().toString()),
        ).toISOString(),
        coverImage: {
          url: coverImage || extractFirstImage(description),
        },
      },
    }
  })

  return {
    data: {
      publication: {
        posts: {
          edges,
        },
      },
    },
  }
}

async function fetchPostFromHtml(
  publicationHost: string,
  slug: string,
): Promise<GraphqlPostResponse> {
  const html = await fetchText(`https://${publicationHost}/${slug}`)
  const nextData = extractNextDataPost(html, slug)

  const title =
    nextData?.title ||
    extractMetaContent(html, 'property', 'og:title') ||
    extractMetaContent(html, 'name', 'twitter:title') ||
    stripHtml(extractTag(html, 'title') || '')

  const contentHtml =
    nextData?.content?.html ||
    extractArticleHtml(html) ||
    `<p>${escapeHtml(
      extractMetaContent(html, 'property', 'og:description') ||
        'Article content unavailable.',
    )}</p>`

  return {
    data: {
      publication: {
        post: {
          title,
          content: {
            html: contentHtml,
          },
          reactionCount: nextData?.reactionCount ?? 0,
          replyCount: nextData?.replyCount ?? 0,
        },
      },
    },
  }
}

async function fetchText(url: string) {
  const response = await fetch(url, {
    headers: {
      Accept: 'text/html,application/rss+xml,application/xml;q=0.9,*/*;q=0.8',
      'User-Agent': 'makviesainte-portfolio/1.0',
    },
    redirect: 'follow',
  })

  if (!response.ok) {
    throw new Error(`Request failed for ${url}: ${response.status}`)
  }

  return response.text()
}

function extractPublicationHost(query: string) {
  return query.match(/publication\s*\(\s*host:\s*"([^"]+)"/)?.[1] || null
}

function extractPostSlug(query: string) {
  return query.match(/post\s*\(\s*slug:\s*"([^"]+)"/)?.[1] || null
}

function extractPostCount(query: string) {
  return Number(query.match(/posts\s*\(\s*first:\s*(\d+)/)?.[1] || '4')
}

function isPostListQuery(query: string) {
  return query.includes('posts(') && query.includes('edges')
}

function isSinglePostQuery(query: string) {
  return query.includes('post(') && query.includes('content')
}

function extractXmlBlocks(xml: string, tagName: string) {
  return Array.from(
    xml.matchAll(new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, 'g')),
  ).map(match => match[1])
}

function extractTag(input: string, tagName: string) {
  return (
    input.match(new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, 'i'))?.[1] ||
    ''
  )
}

function extractAttribute(input: string, tagName: string, attributeName: string) {
  const match = input.match(
    new RegExp(`<${tagName}[^>]*${attributeName}="([^"]+)"[^>]*\\/?>`, 'i'),
  )

  return match?.[1] || null
}

function extractSlugFromUrl(url: string) {
  try {
    const pathname = new URL(url).pathname
    return pathname.split('/').filter(Boolean).pop() || ''
  } catch {
    return url.split('/').filter(Boolean).pop() || ''
  }
}

function extractFirstImage(html: string) {
  return html.match(/<img[^>]+src="([^"]+)"/i)?.[1] || null
}

function extractMetaContent(
  html: string,
  attributeName: 'property' | 'name',
  attributeValue: string,
) {
  const pattern = new RegExp(
    `<meta[^>]+${attributeName}="${escapeRegExp(attributeValue)}"[^>]+content="([^"]*)"[^>]*>`,
    'i',
  )

  return decodeXml(html.match(pattern)?.[1] || '')
}

function extractArticleHtml(html: string) {
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)
  return articleMatch?.[1] || ''
}

function extractNextDataPost(html: string, slug: string) {
  const nextDataMatch = html.match(
    /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/i,
  )

  if (!nextDataMatch) {
    return null
  }

  try {
    const parsed = JSON.parse(decodeHtmlEntities(nextDataMatch[1]))
    return findPostCandidate(parsed, slug)
  } catch (error) {
    console.error('Unable to parse __NEXT_DATA__ payload:', error)
    return null
  }
}

function findPostCandidate(value: unknown, slug: string): any | null {
  if (!value || typeof value !== 'object') {
    return null
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const candidate = findPostCandidate(item, slug)
      if (candidate) return candidate
    }
    return null
  }

  const record = value as Record<string, unknown>
  if (
    record.slug === slug &&
    typeof record.title === 'string' &&
    typeof record.content === 'object'
  ) {
    return record
  }

  for (const nested of Object.values(record)) {
    const candidate = findPostCandidate(nested, slug)
    if (candidate) return candidate
  }

  return null
}

function stripHtml(value: string) {
  return decodeHtmlEntities(value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim())
}

function decodeXml(value: string) {
  return decodeHtmlEntities(value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1'))
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
  }

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

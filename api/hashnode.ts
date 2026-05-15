export default async function handler(
  req: {
    method?: string
    body?: { query?: string } | string
    headers?: Record<string, string | string[] | undefined>
  },
  res: {
    status: (code: number) => {
      json: (body: unknown) => void
      send: (body: string) => void
      setHeader: (key: string, value: string) => void
    }
    setHeader: (key: string, value: string) => void
  },
) {
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300')

  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return res.status(204).send('')
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body =
    typeof req.body === 'string'
      ? (JSON.parse(req.body) as { query?: string })
      : req.body

  if (!body?.query) {
    return res.status(400).json({ error: 'Missing GraphQL query' })
  }

  try {
    const response = await fetch('https://gql.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: body.query }),
    })

    const data = await response.json()
    return res.status(response.status).json(data)
  } catch (error) {
    console.error('Hashnode proxy error:', error)
    return res.status(502).json({ error: 'Unable to reach Hashnode API' })
  }
}

import axios from 'axios'

const HASHNODE_API_PATH = '/api/hashnode'

export async function queryHashnode<T>(query: string) {
  const response = await axios.post<T>(
    HASHNODE_API_PATH,
    { query },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  return response.data
}

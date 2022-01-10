import { useEffect, useState } from 'react'
import { User, GitHubResponse } from '../types'

const fetchOptions = {
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: process.env.REACT_APP_GH_PERSONAL_TOKEN
      ? `token ${process.env.REACT_APP_GH_PERSONAL_TOKEN}`
      : '',
    'User-Agent': 'elidrissidev/github-user-search',
  },
}

function useUser(username: string) {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!username) {
      return
    }

    setIsLoading(true)
    setError(null)

    fetch(`https://api.github.com/users/${username}`, fetchOptions)
      .then((res: Response) => res.json())
      .then(
        (data: GitHubResponse) => {
          if ('message' in data) {
            setError(data.message)
            return
          }
          setError(null)
          setUser(data)
        },
        () => setError('Network error')
      )
      .finally(() => setIsLoading(false))
  }, [username])

  return { user, error, isLoading }
}

export default useUser

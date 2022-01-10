import { render, screen } from '@testing-library/react'
import { User } from '../types'
import { UserDetails } from './UserDetails'

const user: User = {
  login: 'octocat',
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  name: 'The Octocat',
  company: '@github',
  blog: 'https://github.blog',
  location: 'San Francisco',
  bio: null,
  twitter_username: null,
  public_repos: 8,
  followers: 4512,
  following: 9,
  created_at: '2011-01-25T18:44:36Z',
}

describe('UserDetails', () => {
  it('renders loading text when user not available and showLoading is true', () => {
    render(<UserDetails user={null} showLoading={true} />)

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('renders user not found when user not available and showLoading is false', () => {
    render(<UserDetails user={null} showLoading={false} />)

    expect(screen.getByText(/user not found/i)).toBeInTheDocument()
  })

  it('renders user info when available and showLoading is false', () => {
    render(<UserDetails user={user} showLoading={false} />)

    // prettier-ignore
    expect(screen.getByRole('heading', { name: user.name! })).toBeInTheDocument()
    // prettier-ignore
    expect(screen.getByTestId('user-info-username')).toHaveTextContent(`@${user.login}`)
    // prettier-ignore
    expect(screen.getByTestId('user-info-joindate')).toHaveTextContent('Joined Jan 25, 2011')
    // prettier-ignore
    expect(screen.getByTestId('user-info-bio')).toHaveTextContent(/this profile has no bio/i)
    // prettier-ignore
    expect(screen.getByTestId('user-info-repos')).toHaveTextContent(user.public_repos.toString())
    // prettier-ignore
    expect(screen.getByTestId('user-info-followers')).toHaveTextContent(user.followers.toString())
    // prettier-ignore
    expect(screen.getByTestId('user-info-following')).toHaveTextContent(user.following.toString())
  })
})

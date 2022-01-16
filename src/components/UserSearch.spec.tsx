import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserSearch } from './UserSearch'

describe('UserSearch', () => {
  it('notifies when the username is submitted', () => {
    const onSubmit = jest.fn()
    render(<UserSearch onUsernameSubmit={onSubmit} />)

    const username = 'octocat'
    userEvent.type(
      screen.getByRole('textbox', { name: /search github username/i }),
      username
    )
    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(onSubmit).toBeCalledWith(username)
  })
})

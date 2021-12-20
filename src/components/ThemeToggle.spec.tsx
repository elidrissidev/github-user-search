import { render, screen } from '@testing-library/react'
import ThemeToggle from './ThemeToggle'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('ThemeToggle', () => {
  it('has the proper title and icon based on the current theme', () => {
    // dark mode is active
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 'true')

    render(<ThemeToggle />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByTestId('theme-toggle-title')).toHaveTextContent(/light/i)
    expect(screen.getByTestId('theme-toggle-light-icon')).toBeInTheDocument()
  })
})

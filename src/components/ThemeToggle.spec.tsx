import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeToggle, THEME_KEY } from './ThemeToggle'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('ThemeToggle', () => {
  it('has the proper title and icon based on the current theme', () => {
    // dark mode is active
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('true')

    render(<ThemeToggle />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByTestId('theme-toggle-title')).toHaveTextContent(/light/i)
    expect(screen.getByTestId('theme-toggle-light-icon')).toBeInTheDocument()
  })

  it('saves the new theme in localStorage', () => {
    // dark mode is not active initially
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('false')
    jest.spyOn(Storage.prototype, 'setItem')

    render(<ThemeToggle />)

    fireEvent.click(screen.getByRole('button'))

    expect(global.localStorage.setItem).toHaveBeenCalledWith(THEME_KEY, 'true')
  })

  it('toggles the dark theme class on the html element', () => {
    // dark mode is not active initially
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('false')

    render(<ThemeToggle />)

    fireEvent.click(screen.getByRole('button'))

    expect(document.documentElement).toHaveClass('dark')
  })
})

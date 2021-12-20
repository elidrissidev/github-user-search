import React, { useEffect, useState } from 'react'
import './ThemeToggle.css'
import IconMoon from '../svg/IconMoon'
import IconSun from '../svg/IconSun'

export const THEME_KEY = 'darkTheme'

export function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return window.localStorage.getItem(THEME_KEY) === 'true'
  })

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, isDarkTheme.toString())
  }, [isDarkTheme])

  return (
    <button
      type="button"
      className="ThemeToggle"
      onClick={() => setIsDarkTheme((enabled) => !enabled)}
      aria-pressed={isDarkTheme}
    >
      <span className="visually-hidden">Toggle dark mode</span>
      <span
        className="ThemeToggle-title"
        data-testid="theme-toggle-title"
        aria-hidden="true"
      >
        {isDarkTheme ? 'Light' : 'Dark'}
      </span>
      {isDarkTheme ? (
        <IconSun data-testid="theme-toggle-light-icon" aria-hidden="true" />
      ) : (
        <IconMoon data-testid="theme-toggle-dark-icon" aria-hidden="true" />
      )}
    </button>
  )
}

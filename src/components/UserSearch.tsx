import React, { useState } from 'react'
import './UserSearch.css'
import IconSearch from '../svg/IconSearch'

type UserSearchProps = {
  onUsernameSubmit: (username: string) => void
  error?: boolean
}

export function UserSearch({ onUsernameSubmit, error }: UserSearchProps) {
  const [username, setUsername] = useState('')

  return (
    <form
      className="UserSearch"
      onSubmit={(e) => {
        e.preventDefault()
        onUsernameSubmit(username)
      }}
    >
      <label htmlFor="search" className="visually-hidden">
        Search GitHub username
      </label>
      <IconSearch className="UserSearch-icon" aria-hidden="true" />
      <input
        type="text"
        id="search"
        className="UserSearch-input"
        placeholder="Search GitHub username…"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error && <span className="UserSearch-error">No results</span>}
      <button type="submit" className="UserSearch-submit">
        Search
      </button>
    </form>
  )
}

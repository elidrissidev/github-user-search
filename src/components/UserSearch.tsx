import React from 'react'
import './UserSearch.css'
import IconSearch from '../svg/IconSearch'

export function UserSearch() {
  return (
    <form className="UserSearch">
      <label htmlFor="search" className="visually-hidden">
        Search GitHub username
      </label>
      <IconSearch height="20" width="20" aria-hidden="true" />
      <input
        type="text"
        id="search"
        className="UserSearch-input"
        placeholder="Search GitHub username…"
      />
      <span className="UserSearch-error">No results</span>
      <button type="submit" className="UserSearch-submit">
        Search
      </button>
    </form>
  )
}

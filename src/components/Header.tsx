import React from 'react'
import './Header.css'

type HeaderProps = {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <header className="Header">
      <h1 className="Header-title">{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: process.env.REACT_APP_APP_NAME,
}

export default Header

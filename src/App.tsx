import React, { useCallback } from 'react'
import './App.css'
import { Header } from './components/Header'
import { UserDetails } from './components/UserDetails'
import { UserSearch } from './components/UserSearch'
import { User } from './types'

const user: User = {
  login: 'elidrissidev',
  avatar_url: 'https://avatars.githubusercontent.com/u/67818913?v=4',
  name: 'Mohamed ELIDRISSI',
  company: null,
  blog: 'https://www.elidrissi.dev',
  location: 'Morocco',
  bio: 'Open-source contributor. Linux fanboy 🐧. Music is my therapy 🎵. Being different is being human.',
  twitter_username: null,
  public_repos: 19,
  followers: 2,
  following: 0,
  created_at: '2020-07-04T06:38:42Z',
}

function App() {
  const onUsernameSubmit = useCallback((username: string) => {
    console.log('Submitted:', username)
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <UserSearch onUsernameSubmit={onUsernameSubmit} />
        <UserDetails user={user} />
      </main>
    </div>
  )
}

export default App

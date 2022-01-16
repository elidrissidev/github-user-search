import React, { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { UserDetails } from './components/UserDetails'
import { UserSearch } from './components/UserSearch'
import useUser from './hooks/useUser'

function App() {
  const [username, setUsername] = useState('octocat')
  const { user, error, isLoading } = useUser(username)

  return (
    <div className="App">
      <Header />
      <main>
        <UserSearch
          onUsernameSubmit={setUsername}
          error={error === 'Not Found'}
        />
        <UserDetails user={user} showLoading={isLoading} />
      </main>
    </div>
  )
}

export default App

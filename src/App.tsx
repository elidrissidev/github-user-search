import React, { useCallback } from 'react'
import './App.css'
import { Header } from './components/Header'
import { UserSearch } from './components/UserSearch'

function App() {
  const onUsernameSubmit = useCallback((username: string) => {
    console.log('Submitted:', username)
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <UserSearch onUsernameSubmit={onUsernameSubmit} />
      </main>
    </div>
  )
}

export default App

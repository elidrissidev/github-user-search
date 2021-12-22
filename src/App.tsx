import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { UserSearch } from './components/UserSearch'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <UserSearch />
      </main>
    </div>
  )
}

export default App

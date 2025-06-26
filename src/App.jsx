import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Navigation from './components/Navigation'
import Home from './components/Home'
import Chat from './components/Chat'
import Exercises from './components/Exercises'
import Profile from './components/Profile'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <Router>
      <div className="app-container">
        <div className="mobile-frame">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </Router>
  )
}

export default App


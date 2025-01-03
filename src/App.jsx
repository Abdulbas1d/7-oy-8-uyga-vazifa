import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import Playlist from './pages/Playlist'
import Like from './pages/Like'

function App() {
  return (
    <div>
      <Routes>
        <Route index element = {<MainLayout><Home /></MainLayout>} />
        <Route path='/playlist/:id' element = {<MainLayout><Playlist /></MainLayout>} />
        <Route path='/like' element = {<MainLayout><Like /></MainLayout>} />
      </Routes>
    </div>
  )
}

export default App

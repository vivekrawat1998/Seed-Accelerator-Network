import { useState } from 'react'
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Homepage from './pages/Homepage'
import Aboutus from './pages/Aboutus'
import Ourwork from './pages/Ourwork'
import Networkpage from './pages/Networkpage'


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='/about' element={<Aboutus />} />
            <Route path='/ourwork' element={<Ourwork />} />
            <Route path='/network-members' element={<Networkpage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App

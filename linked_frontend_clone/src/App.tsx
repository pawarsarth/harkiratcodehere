import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Sigin'
import { Dashboard } from './pages/Dashboard'

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup></Signup>}></Route>
           <Route path='/signin' element={<Signin></Signin>}></Route>
           <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

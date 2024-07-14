import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const Layouts = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layouts
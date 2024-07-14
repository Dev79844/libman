import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SearchResultsPage from '../pages/SearchResultPage/SearchResultPage'
import Dashboard from '../pages/DashBoard/DashBoard'
import LoginPage from '../pages/LoginPage/LoginPage'

const Layouts = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/searchresultpage' element={<SearchResultsPage/>} />
                <Route path='/login' element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layouts
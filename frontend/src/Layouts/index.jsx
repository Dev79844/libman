import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import SearchResultsPage from '../pages/SearchResultPage/SearchResultPage'
import Dashboard from '../pages/DashBoard/DashBoard'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard'
import LibrarianDashboard from '../pages/LibrarianDashboard/LibrarianDashboard'

const Layouts = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/searchresultpage' element={<SearchResultsPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/admin' element={<AdminDashboard/>} />
                <Route path='/librarian' element={<LibrarianDashboard/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layouts
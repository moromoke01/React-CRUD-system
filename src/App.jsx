import { useState } from 'react'
// import {BrowseRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import UserController from './Components/UserController'
// import UsersList from './Components/UsersList'

function App() {
  

  return (
    <>
    <UserController />

    {/* <Router>
      <Routes>
        <Route path='/UserList' element={<UsersList />}/>
      </Routes>
    </Router> */}
    </>
  )
}

export default App

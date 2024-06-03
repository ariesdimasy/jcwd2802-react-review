
import './App.css'
import { Routes, Route } from "react-router-dom"

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Detail from "./pages/detail"
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <h1 className='text-3xl'> Hello World </h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App

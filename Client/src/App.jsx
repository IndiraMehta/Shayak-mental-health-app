//import { useState } from 'react'
import Signup from "./components/Signup";
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./home/Home";
function App() {
  
  return (
    //<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>    
      <Route path='/register' element={<Signup/>}></Route>    
      <Route path='/login' element={<Login/>}></Route>       
    </Routes>
    //</BrowserRouter>
    
  )
}

export default App

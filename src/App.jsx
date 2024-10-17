import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Screens/Contact'
import About from './Screens/About'
import Home from './Screens/Home'
import Products from './Screens/Products'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/products' element={<Products/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

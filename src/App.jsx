import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import About from './About'
import Header from './Components/Header'
import Footer from './Components/Footer'
// import Account from './Account'

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
           {/* <Route path='/account' element={<Account/>}/> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

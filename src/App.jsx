import Home from './components/Home'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Products from './components/Products'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Productdetails from './components/Productdetails'

//for router
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>

      <div className='min-h-screen w-screen'>
        {/* navbar */}
        <div className='fixed top-0 w-full z-1 shadow-sm'><Navbar /></div>
        {/* navbar */}



        <Routes>
          <Route path='/'
            element={
              <>
              <section id='home' ><Home /></section>
              <section id='products'><Products /></section>
              <section id='contact'><Contact /></section>
              </> 
            }
          />
          <Route path='/product/:id' element={<Productdetails/>}/>
        </Routes>

        {/* home */}
        
        {/* home */}

        {/* Products */}
        
        {/* Products */}

        {/* Contact */}
        
        {/* Contact */}

        {/* footer */}
        <Footer />
        {/* footer */}
      </div>
    </BrowserRouter>
  )
}

export default App

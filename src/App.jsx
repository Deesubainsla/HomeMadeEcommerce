import Home from './components/Home'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Products from './components/Products'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
 

  return (
  
      <div className='min-h-screen w-screen'>
        {/* navbar */}
         <Navbar/>
        {/* navbar */}
        {/* home */}
        <Home/>
        {/* home */}

        {/* Products */}
        <Products/>
        {/* Products */}

        {/* Contact */}
        <Contact/>
        {/* Contact */}

        {/* footer */}
        <Footer/>
        {/* footer */}
      </div>
  
  )
}

export default App

import React from 'react'
import Home from './home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './about/About';
import Contact from './contact/Contact';
import Products from './product/Products';

const App = () => {
  return (
   <>
      
   <BrowserRouter>
    <Header/>

    <Routes>
    
    <Route path='/'  element= {<Home/>}/>
    <Route path='/products'  element= {<Products/>}/>
    <Route path='/about'  element= {<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  
  
    </Routes>
   </BrowserRouter>
    

 
   </>
  )
}

export default App

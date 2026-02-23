import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from './MainContent'
import Categories from './Categories'
import Trust_us from './Trust_us'
import Reviews from './Reviews'
import Order_process from './Order_process'


const Home = () => {
  return (
   <>
 
   <div>
    
    <MainContent/>
    <Categories/>
    <Trust_us/>
    {/* <Reviews/> */}
    <Order_process/>
    <Footer/>
    
   </div>
   </>
  )
}

export default Home

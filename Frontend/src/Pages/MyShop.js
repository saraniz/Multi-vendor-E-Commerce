import React from 'react'
import Navbar from '../Components/Header/Navbar'
import ProductList from '../Components/Body/Productlist'
import Footer from '../Components/Footer/Footer'

function MyShop() {
  return (
    <div><Navbar/>
    <ProductList/>
    <Footer/>
    </div>
  )
}

export default MyShop;
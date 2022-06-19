import React from 'react'
import Singleproducts from './Singleproducts'
import { Routes, Route } from 'react-router'
import Home from './Home'
import ProductSimple from './ProductSimple'
import Cart from './Cart'
import Productspage from './Productspage'
import Payment from './Payment'
import Login from './Login'



function Allroutes() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Productspage/>}/>
        <Route path='/products/:id' element={<Singleproducts/>} />     
        <Route path='/payment' element={<Payment/>}/>    
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
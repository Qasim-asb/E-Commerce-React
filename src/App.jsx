import React from 'react'
import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './pages/Shop/Shop'
import ShopCategory from './pages/ShopCategory/ShopCategory'
import Product from './pages/Product/Product'
import LoginSignup from './pages/LoginSignup/LoginSignup'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import men_banner from './assets/banner.jpg'
import women_banner from './assets/women_banner.avif'
import kids_banner from './assets/kids_banner.jpg'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<ShopCategory banner={men_banner} category='men' />} />
            <Route path='/women' element={<ShopCategory banner={women_banner} category='women' />} />
            <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid' />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

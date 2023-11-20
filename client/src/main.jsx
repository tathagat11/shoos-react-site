import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart'
import Product from './components/Product/Product.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/product/:productId' element={<Product />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

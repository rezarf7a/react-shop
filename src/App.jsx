import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"

import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import CheckOut from './pages/CheckOut'
import PageNotFound from './pages/PageNotFound'


function App() {
  
  return (
    <>
    <Layout>
      <Routes>
        <Route index element={<Navigate to={'/products'} replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App

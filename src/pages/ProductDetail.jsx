import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { SiOpenproject } from 'react-icons/si'
import { IoMdPricetag } from 'react-icons/io'
import { FaArrowLeft } from 'react-icons/fa'

import { fetchProducts } from '../features/product/productSlice';
import Loader from '../components/Loader';

import styles from './DetailsPage.module.css'


function ProductDetail() {

  const store = useSelector(item => item.product);
  const dispatch = useDispatch(fetchProducts)

  useEffect( () => {
    if(!store.length) {
      dispatch(fetchProducts())
    }else {
      return
    }
  }, []);

  const { id } = useParams();
  const productDetails = useSelector(item => item.product.products.find(item => item.id === +id));

  if(!productDetails) return <Loader />

  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}><SiOpenproject />{productDetails.category}</p>
      <div>
        <span className={styles.price}><IoMdPricetag />{productDetails.price} $</span>
        <Link to='/products'><FaArrowLeft /><span>Back to Shop</span></Link>
      </div>
      </div>
    </div>
  )
}

export default ProductDetail
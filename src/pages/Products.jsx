import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'


import { fetchProducts } from '../features/product/productSlice';
import Card from '../components/Card';
import Loader from '../components/Loader.jsx'
import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from '../helper/helper.js';

import styles from './products.module.css'
import SearchBox from '../components/SearchBox.jsx'
import SideBar from '../components/SideBar.jsx';

function Products() {

  const dispatch = useDispatch();
  const { products, loading, error} = useSelector( state => state.product);

  const [search , setSearch] = useState('');
  const [ displayed, setDisplayed ] = useState('');
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect( () => {
    if(!products.length) {
      dispatch(fetchProducts())
    }else {
      return
    }
  }, []);

  useEffect( () => {

    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));

  }, [products] )

  useEffect( () => {
    setSearchParams(query)
    setSearch(query.search || '')
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)
    setDisplayed(finalProducts);
  }, [query] );

  

  
  return (
    <>
    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

    <div className={styles.contianer}>
      <div className={styles.products}>
        {loading && <Loader />}
        {error && <h2 style={{width: '100%', textAlign: 'center', height: '1000px', marginTop: '100px'}}>{error}</h2>}
        {displayed && displayed.map(item => <Card key={item.id} data={item} />) }
      </div>

      <SideBar query={query} setQuery={setQuery} />
    </div>
    </>
  )
}

export default Products

import React from 'react';
import { FaListUl } from 'react-icons/fa';

import { createQueryObject } from '../helper/helper';

import styles from './SideBar.module.css'

function SideBar( { query, setQuery }) {

  const categoties = [
    {id: 1, type: 'All'},
    {id: 2, type: 'Electronics'},
    {id: 3, type: 'Jewelery'},
    {id: 4, type: "Men's Clothing"},
    {id: 5, type: "Women's Clothing"},
  ]

    const categoryHandler = (e) => {
        const {tagName} = e.target;
        const category = e.target.innerText.toLowerCase();
        
        if(tagName !== 'LI') return
        setQuery( (query) => (createQueryObject( query, { category })))
    };  

  return (
    <div className={styles.sidebar}>
        <div>
          <FaListUl />
          <p>category</p>
        </div>

        <ul onClick={categoryHandler}>
          {
            categoties.map( item => (<li key={item.id} className={query.category === item.type.toLowerCase() ? styles.selected : null}>{item.type}</li>))
          }
        </ul>
      </div>
  )
}

export default SideBar
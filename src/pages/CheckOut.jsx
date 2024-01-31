import React from 'react';
import { useSelector } from 'react-redux';

import BasketCard from '../components/BasketCard'
import BasketSidBar from '../components/BasketSidBar';

import styles from './CheckOut.module.css'

function CheckOut() {

  const data = useSelector(item => item.card)

  if(!data.itemCounter) {
    return(
      <div className={ styles.container}>
        <p>your basket is <b>empty</b></p>
      </div>
    )
  }

  return (
    <div className={ styles.container}>
      <BasketSidBar data={data} />
      <div className={styles.products}>
      {data.selectedItems.map( item => <BasketCard key={item.id} data={item} />)}
      </div>
    </div>
  )
}

export default CheckOut
import React from 'react'
import { useDispatch } from 'react-redux'
import {MdDeleteOutline} from 'react-icons/md'

import { shortenText } from '../helper/helper'

import { decrease, removeItem, increase } from '../features/card/cardSlice'

import styles from './BasketCard.module.css'

function BasketCard({data}) {

    const dispatch = useDispatch()

  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title} />
        <p>{shortenText(data.title)}</p>
        <p>{data.price * data.quantity} $</p>
        <div className={styles.actions}>
            { data.quantity === 1 && (<button onClick={() => dispatch(removeItem(data))}><MdDeleteOutline /></button>)}
            { data.quantity > 1 && (<button onClick={ () => dispatch(decrease(data))}>-</button>)}
            <span>{data.quantity}</span>
            <button onClick={ () => dispatch(increase(data))}>+</button>
        </div>
    </div>
  )
}

export default BasketCard
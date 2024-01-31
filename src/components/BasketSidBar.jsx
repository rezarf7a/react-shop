import React from 'react'
import { useDispatch } from 'react-redux'

import {TbChecklist} from 'react-icons/tb'
import {FaHashtag} from 'react-icons/fa'
import {BsPatchCheck} from 'react-icons/bs'

import { checkOut } from '../features/card/cardSlice'

import styles from './BasketSideBar.module.css'

function BasketSidBar( {data} ) {

    const dispatch = useDispatch();

  return (
    <div className={styles.sideBar}>
        <div>
            <TbChecklist />
            <p>Total:</p>
            <span>{data.total} $</span>
        </div>

        <div>
            <FaHashtag />
            <p>Quantity:</p>
            <span>{data.itemCounter}</span>
        </div>

        <div>
            <BsPatchCheck />
            <p>Status:</p>
            <span>{!data.checkOut && 'Pending...'}</span>
        </div>
        <button onClick={ () => dispatch(checkOut())}>Checkout</button>
    </div>
  )
}

export default BasketSidBar
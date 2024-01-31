import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { useSelector } from 'react-redux'

import styles from './layOut.module.css'

function Layout( { children } ) {

  const {itemCounter} = useSelector(state => state.card)

  return (
    <>
    <header className={styles.header}>
        <Link to='./products'>Go To Ptoducts</Link>
        <div>
          <Link to='./checkOut'><PiShoppingCartSimpleBold /></Link>
          {!!itemCounter && <span>{itemCounter}</span>}
        </div>
        
    </header>

    {children}

    <footer className={styles.footer}>
      <p>Developed By Reza With ❤</p>
    </footer>
    </>
  )
}

export default Layout
import React, { useState } from 'react'
import style from './Header.module.css';
import { Button } from '../Button/Button';
import CartIcon from '../SVGicon/CartIconComponent';
import mealsImage from '../../assets/meals.jpg';
import OrderAmounNum from './OrderAmounNum';
import OrderCard from '../OrderCard/OrderCard';
import { ReactDOM } from 'react';

export default function Header() {
  const [ordercard , setordercard] = useState(false)
  const orderHandler = () =>{
    setordercard(true)
  }
  const changeHandler = () =>{
    console.log("onchangehanler")
    setordercard(false)
  }

  return (
    <>
        <header className={style.header}>
            <div>FoodApp</div>
            <div>
            <pre><Button onClick={orderHandler}><CartIcon/>   Your Card <OrderAmounNum/></Button></pre>
            </div>
        </header>
        <div className={style['main-image']}>
              <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
        <div>
        {/* {ordercard == true ? ReactDOM.createPortal(<OrderCard></OrderCard>,document.getElementById("ordercard")):<></>} */}
     {ordercard == true ? <OrderCard onchange={changeHandler}></OrderCard>:<></>}
        </div>
    </>
  )
}

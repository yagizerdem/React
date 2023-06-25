import React from 'react'
import style from './Row.module.css'


export default function Row(props) {
    
  return (
    <li className={style['cart-item']}>
    <div>
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
      <div className={style.summary}>
        <span className={style.price}>{props.price}</span>
      </div>
    </div>
    <div className={style.actions}>
      <button onClick={()=>{props.onRemove(props.id, "-")}}>−</button>
      <button onClick={()=>{props.onAdd(props.id , "+")}}>+</button>
    </div>
  </li>
  )
}

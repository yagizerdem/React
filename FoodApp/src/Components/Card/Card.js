import React, { useContext } from 'react'
import { Context } from 'react'
import  ItemcontextProvider  from '../store/item_context'
import Row from './Row'
import styled from './Card.module.css'

export default function Card() {
  const ctx = useContext(ItemcontextProvider)
  function changehandler(id , operator){
    ctx.updatemealcount(id , operator )
  }


  return (
    <>
   <br></br>
    <div className={styled.container}>
      {ctx.meals.map(x =>  <Row key ={x.id}id={x.id} summary={x.summary} price={x.price} name={x.name} description= {x.description} onAdd = {changehandler} onRemove = {changehandler}></Row>)}
    </div>
    </>
  )
}

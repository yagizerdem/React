import React, { useContext } from 'react'
import styled from './OrderCard.module.css'
import { Button } from '../Button/Button'
import  ItemcontextProvider  from '../store/item_context'
import Row from './Row'
export default function OrderCard(props) {
    const ctx = useContext(ItemcontextProvider)
    function changehandler(id , operator){
        ctx.updatemealcount(id , operator )
      }
      const legalrows = []
      if(ctx.m1_count>0){
        legalrows.push("m1")
      }
      if(ctx.m2_count>0){
        legalrows.push("m2")
      }
      if(ctx.m3_count>0){
        legalrows.push("m3")
      }
      if(ctx.m4_count>0){
        legalrows.push("m4")
      }

      if(legalrows.length <= 0){
        props.onchange()
      }

        return (
          <>
          <div className = {styled.background}></div>
           <div className={styled.container}>
             {ctx.meals.map(x => legalrows.includes(x.id) && <Row key ={x.id}id={x.id} summary={x.summary} price={x.price} name={x.name} description= {x.description} onAdd = {changehandler} onRemove = {changehandler} amount={x.count}></Row>)}
             <div>{legalrows.length > 0 ? <span><Button onClick={ props.onchange}>Cancel</Button><Button onClick={props.onchange}>Order</Button></span> : <></>}</div>
           </div>
        
           </>
        )
      

}

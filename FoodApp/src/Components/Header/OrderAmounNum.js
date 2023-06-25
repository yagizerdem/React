import React, { useContext, useEffect, useState } from 'react'
import ItemcontextProvider from '../store/item_context';

let counter = 0;
export default function OrderAmounNum() {
const ctx = useContext(ItemcontextProvider)
    counter = 0;
    if(ctx.m1_count > 0 ){
        counter++
    }
    if(ctx.m2_count > 0 ){
        counter++
    }
    if(ctx.m3_count > 0 ){
        counter++
    }

    if(ctx.m4_count > 0 ){
        counter++
    }



  return (
    <div>
      {counter >0 ? counter : 0}
    </div>
  )
}

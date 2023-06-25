import React, { useState } from 'react';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      count : 0,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      count : 0,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      count : 0,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      count : 0,
    },
  ];

const Itemcontext = React.createContext({
    m1_count : 0,
    m2_count : 0,
    m3_count : 0,
    m4_count : 0,
    meals : DUMMY_MEALS,
    })

export const ItemcontextProvider = (props) =>{
    const [m1_count , setm1_count] = useState(0)
    const [m2_count , setm2_count] = useState(0)
    const [m3_count , setm3_count] = useState(0)
    const [m4_count , setm4_count] = useState(0)
    const updateMealCount = (mealid , operator) =>{
      if(operator=="+"){
        switch (mealid){
            case  "m1":
                setm1_count(m1_count+1)
            break;
            case  "m2":
                setm2_count(m2_count+1)
            break;
            case  "m3":
                setm3_count(m3_count+1)
            break;
            case  "m4":
                setm4_count(m4_count+1)
            break;
      }
        }

        if(operator == "-"){
            switch (mealid){
                case  "m1":
                    setm1_count(m1_count-1 > 0 ? m1_count-1 : 0)
                break;
                case  "m2":
                    setm2_count(m2_count-1 > 0 ? m2_count-1 : 0)
                break;
                case  "m3":
                    setm3_count(m3_count-1 > 0 ? m3_count-1 : 0)
                break;
                case  "m4":
                    setm4_count(m4_count-1 > 0 ? m4_count-1 : 0)
                break;
          }
          }


    }    
            console.log(m1_count)
          console.log(m2_count)
          console.log(m3_count)
          console.log(m4_count)
          
    DUMMY_MEALS[0].count = m1_count;
    DUMMY_MEALS[1].count = m2_count;
    DUMMY_MEALS[2].count = m3_count;
    DUMMY_MEALS[3].count = m4_count;

    return(
        <Itemcontext.Provider
            value={{
                m1_count:m1_count,
                m2_count:m2_count,
                m3_count:m3_count,
                m4_count:m4_count,
                meals : DUMMY_MEALS,
                updatemealcount:updateMealCount,
            }}
        >
            {props.children}
        </Itemcontext.Provider>
    );
}
export default Itemcontext;
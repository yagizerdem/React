import styled from "styled-components";
import Button from "./Button";
import './ErrorCard.css'



const Errorcard = (props)=>{

   const  ErrorHandler = ()=>{
        console.log("errohandler")
        props.activate()
    }

    return(
        
    <div>
         <div className="errorcard-container">
            <p>Enter valid values</p>
            <Button onClick={ErrorHandler}>OK</Button>
        </div>

           <div className="allpage" onClick={ErrorHandler}>
    
       </div>
    </div>
    )
}
export default Errorcard;

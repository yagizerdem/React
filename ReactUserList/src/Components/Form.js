import './Form.css'
import Button from './Button';

const Form = (props) =>{
    const addUserHandler = (e)=>{
        e.preventDefault(); 
        console.log((e.target[0].value.length ))
        if(e.target[0].value.replace(/ /g, '') == ""||e.target[1].value <1){
            props.errorhandler();
            return;
        }
        console.log("devam")
        props.adduser(e.target[0].value ,e.target[1].value)
    }


    return(
        <form onSubmit={addUserHandler} >
        <div className='form-container'>
            <input type="text"></input>
            <input type="number" min={1}></input>
            <span><Button disabled={!props.isactive}>add user</Button></span>
        </div>
        </form>
    );
}

export default Form;
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function MyCard(props) {

  const [text , setText] = useState('');
  const [mail , setMail] = useState('');
  const [password , setPassword] = useState('');
  
  function setTextHandler(e){
    console.log(e.target.value);
    setText(e.target.value)
  }
  function setMailHandler(e){
    console.log(e.target.value);
    setMail(e.target.value)
  }
  function setPasswordHandler(e){
    console.log(e.target.value);
    setPassword(e.target.value)
  }
const onSubmit =(e)=>{
  e.preventDefault();
  const args ={
    name:text,
    mail:mail,
  }
  props.dataInfo(args)
  setMail("")
  setText("")
  setPassword("")
  console.log("submit");
}

  return (
    
   <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Customer Login Page</Card.Title>
       <br></br>
        <Card.Text>
        <form onSubmit={onSubmit}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default" >
          Name
        </InputGroup.Text>
        <Form.Control
        onChange={setTextHandler}
        value={text}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
        <br></br>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Mail
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={setMailHandler}
          value={mail}
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Password
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={setPasswordHandler}
          value={password}
        />
      </InputGroup>
      <Button variant="primary" type="submit">Register </Button>
      </form>
        </Card.Text>
       
      </Card.Body>
    </Card>
  
 
    
  );
}

export default MyCard;

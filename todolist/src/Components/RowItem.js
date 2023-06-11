import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./RowList.css";

function Rowitem(props) {

  function goTotrash(){
    props.trash(props.id);
  }
  function goToedit(){
    props.edit(props.id);
  }

    return (
    <Row className="mission" id={props.id}>
      <Col xs={8}>{props.message} </Col>
      <Col><i class="fa-solid fa-pen-to-square" onClick={goToedit}></i></Col>
      <Col><i class="fa-solid fa-trash" onClick={goTotrash}></i></Col>
    </Row>
    )
  }

  export default Rowitem;



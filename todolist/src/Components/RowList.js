import Row from "react-bootstrap/esm/Row";
import Rowitem from "./RowItem";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

let id = 0;
let editid = -1;
function Rowlist() {
  let [value, SetValue] = useState();
  let [items, Setitems] = useState([
    { text: "görev1", id: id++ },
    { text: "görev2", id: id++ },
    { text: "görev3", id: id++ },
  ]);

  function Edit(id) {
    console.log(id);
    editid = id;
    let item = items.filter((item) => {
      if (item.id == id) {
        return item
      }
    });
    console.log(item[0].text);
    SetValue(item[0].text);
  }
  function Trash(id) {
    console.log("deleted");
    console.log(id);
    Setitems(items.filter((item) => item.id != id));
  }
  function changeText(e) {
    console.log(e.target.value);
    SetValue(e.target.value);
  }
  function NewOrEdit() {
    if (editid < 0) {
      console.log("girdi");
      Setitems((prev) => [...prev, { text: value, id: id++ }]);
      SetValue("");
    }
    if (editid > 0) {
      const newlist = items.map((item) =>
        item.id == editid ? { ...item, text: value } : item
      );
      Setitems(newlist);
      SetValue("");
      editid = -1;
    }
  }

  return (
    <div>
      <InputGroup>
        <Form.Control onChange={changeText} value={value} />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={NewOrEdit}
        >
          {editid > -1 ? "edit" : "addnew"}
        </Button>
      </InputGroup>
      {items.map((x) => {
        return <Rowitem message={x.text} edit={Edit} trash={Trash} id={x.id} />;
      })}
    </div>
  );
}

export default Rowlist;

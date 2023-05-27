import logo from "./logo.svg";
import "./App.css";
import MyCard from "./Components/CardComponent";

function App(props) {
  function dataInfoHandler(args){
   props.mainDataInfo(args)
  }
  return (
    <div>
      <MyCard dataInfo={dataInfoHandler}></MyCard>
    </div>
  );
}

export default App;

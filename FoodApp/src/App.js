import Header from "./Components/Header/Header";
import Summary from "./Components/Summary/Summary";
import Card from "./Components/Card/Card";
import { ItemcontextProvider }   from "./Components/store/item_context";


function App() {
  return (
    <ItemcontextProvider>
      <Header></Header>
      <Summary></Summary>
      <Card></Card>
    </ItemcontextProvider>
  );
}

export default App;

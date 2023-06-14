import logo from './assets/investment-calculator-logo.png';
import Form from './Componetns/Form';
import Table from './Componetns/Table';
import { useState } from "react";
function App() {
  const[data ,Setdata] = useState();
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    if(userInput[0]==""||userInput[1]==""||userInput[2]==""||userInput[3]==""){
      console.log("empty entryt")
      return;
    }
    if(userInput[0]<=0||userInput[1]<=0||userInput[2]<=0|| userInput[3] <= 0){
      console.log("invalid entryt")
      return;
    }

    const yearlyData = []; // per-year results

    let currentSavings = +userInput[0]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput[1]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput[2] / 100;
    const duration = +userInput[3];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    Setdata(yearlyData)
    console.log(yearlyData)
    // do something with yearlyData ...
  };

  const resetHandler = () =>{
    console.log("reset")
    Setdata([])
  }
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form calculatehandler ={calculateHandler} resethandler ={resetHandler}></Form>
      <Table data={data}></Table>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      
    </div>
  );
}

export default App;

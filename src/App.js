import './App.css';
import { useState } from "react";

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function Key({ label, ClickHandler }) {
  return (
    <button onClick={ClickHandler}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);
  const [isNum2, setIsNum2] = useState(false);
  

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (!isNum2) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);  
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);  
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);  
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);  
      }
    }
  };
  

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    
  if (num1 !== null) {
    setOp(value);
    setIsNum2(true);  
    setDisp(value);   
  }
  };

  

  const eqClickHandler = (e) => {
    e.preventDefault();
    
    if (num1 !== null && num2 !== null && op !== null) {
      let result = null;
      if (op === "+") {
        result = parseInt(num1) + parseInt(num2);
      } else if (op === "-") {
        result = parseInt(num1) - parseInt(num2);
      } else if (op === "*") {
        result = parseInt(num1) * parseInt(num2);
      } else if (op === "/") {
        result = parseInt(num1) / parseInt(num2);
      } else {
      result = "ERROR";
    }
  
    setDisp(result);
    setNum1(result);
    setNum2(null);
    setOp(null);
    setIsNum2(false);
    
  }
  };

  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  };

  const surnameClickHandler = () => {
    setDisp("Jerome Howard Santos Miclat"); // Replace with your actual full name
  };

  return (
    <div className="App">
      <header className="AppHeader">
        Calculator of Jerome Howard Santos Miclat - IT3A
      </header>
      <div className='CalcContainer'>
        <div className='DispContainer'>
          <Display display={disp} />
        </div>
        <div className='ButtContainer'>
          <Key label={7} ClickHandler={numClickHandler} />
          <Key label={8} ClickHandler={numClickHandler} />
          <Key label={9} ClickHandler={numClickHandler} />
          <Key label={'+'} ClickHandler={opClickHandler} />
          <Key label={4} ClickHandler={numClickHandler} />
          <Key label={5} ClickHandler={numClickHandler} />
          <Key label={6} ClickHandler={numClickHandler} />
          <Key label={'-'} ClickHandler={opClickHandler} />
          <Key label={1} ClickHandler={numClickHandler} />
          <Key label={2} ClickHandler={numClickHandler} />
          <Key label={3} ClickHandler={numClickHandler} />
          <Key label={'*'} ClickHandler={opClickHandler} />
          <Key label={'clr'} ClickHandler={clrClickHandler} />
          <Key label={0} ClickHandler={numClickHandler} />
          <Key label={'='} ClickHandler={eqClickHandler} />
          <Key label={'/'} ClickHandler={opClickHandler} />
          
           </div>
           <div className='Surnamebutton'>
           <Key label={'Miclat'} ClickHandler={surnameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;

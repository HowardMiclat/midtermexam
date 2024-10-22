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
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");
  const messages = {
    1: "Being On Time",
    2: "Making An Effort",
    3: "Being High Energy",
    4: "Having A Positive Attitude",
    5: "Being Passionate",
    6: "Using Good Body Language",
    7: "Being Coachable",
    8: "Doing A Little Extra",
    9: "Being Prepared",
    0: "Having A Strong Work Ethic"
  };
  

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(messages[value]); 
  };
  

  

  

  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp("10 Things That Require Zero Talent"); // Reset message
  };

  const surnameClickHandler = () => {
    setDisp("Jerome Howard Santos Miclat"); // Replace with your actual full name
  };

  return (
    <div className="App">
      <header className="AppHeader">
        Jerome Howard Santos Miclat IT3A
      </header>
      <div className='CalcContainer'>
        <div className='DispContainer'>
          <Display display={disp} />
        </div>
        <div className='ButtContainer'>
          <Key label={1} ClickHandler={numClickHandler} />
          <Key label={2} ClickHandler={numClickHandler} />
          <Key label={3} ClickHandler={numClickHandler} />
          <Key label={4} ClickHandler={numClickHandler} />
          <Key label={5} ClickHandler={numClickHandler} />
          <Key label={6} ClickHandler={numClickHandler} />
          <Key label={7} ClickHandler={numClickHandler} />
          <Key label={8} ClickHandler={numClickHandler} />
          <Key label={9} ClickHandler={numClickHandler} />
          <Key label={0} ClickHandler={numClickHandler} />
          <Key label={'clr'} ClickHandler={clrClickHandler} />
        </div>
        <div className='Surnamebutton'>
          <Key label={'Miclat'} ClickHandler={surnameClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App; 

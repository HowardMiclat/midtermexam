import './App.css';
import {useState} from "react";

function Display({display}) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}
function Key({label, ClickHandler}) {
  return (
      <button onClick={ClickHandler}>
        {label}
      </button> 
  );
}


function App() {
const[disp, setDisp] = useState(0);
const[num1, setNum1] = useState(null);
const[num2, setNum2] = useState(null);
const[op, setOp] = useState(null);

const numClickHandler = (e) => {
  e.preventDefault();
  const value  = e.target.innerHTML;
if (op === null) {
  if(num1 === null) {
    setNum1(value);
    setDisp(value);}
  else{
    setNum1(num1+value);
    setDisp(num1+value);
  }
}
  console.log(num1);
}

const opClickHandler = (e) => {
  e.preventDefault();
  const value  = e.target.innerHTML;
  setOp(value);
  setDisp(value)
  console.log(value);
}


const ClickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log("Coming Soon");
  }


const eqClickHandler = (e) => {
  e.preventDefault();
  const value  = e.target.innerHTML;
  console.log(num1 + '|' + op + '|' + num2);

  let result = null;
  if (op ==="+"){
    result = parseInt(num1) + parseInt(num2);
  }else{
    result = "ERROR";
  }
  setDisp(result)
}

  return (
    <div className="App">
      <div className='CalcContainer'>
        <div className='DispContainer'>
          <Display display={disp}/>
        </div>
        <div className='ButtContainer'>
          <Key label={7} ClickHandler={numClickHandler} />
          <Key label={8} ClickHandler={numClickHandler}/>
          <Key label={9} ClickHandler={numClickHandler}/>
          <Key label={'+'} ClickHandler={opClickHandler}/>
          <Key label={4} ClickHandler={numClickHandler}/>
          <Key label={5} ClickHandler={numClickHandler}/>
          <Key label={6} ClickHandler={numClickHandler}/>
          <Key label={'-'} ClickHandler={opClickHandler}/>
          <Key label={1} ClickHandler={numClickHandler}/>
          <Key label={2} ClickHandler={numClickHandler}/>
          <Key label={3} ClickHandler={numClickHandler}/>
          <Key label={'*'} ClickHandler={opClickHandler}/>
          <Key label={'clr'} ClickHandler={ClickHandler}/>
          <Key label={0} ClickHandler={numClickHandler}/>
          <Key label={'='} ClickHandler={eqClickHandler}/>
          <Key label={'/'} ClickHandler={opClickHandler}/>
        </div>

      </div>
    </div>
  );
}


export default App;

import './App.css';

function Display() {
  return (
    <div className="Display">
      0
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
  return (
    <div className="App">
      <div className='CalcContainer'>
        <div className='DispContainer'>
          <Display/>
        </div>
        <div className='ButtContainer'>
          <Key label={7} ClickHandler={ClickHandler} />
          <Key label={8} ClickHandler={ClickHandler}/>
          <Key label={9} ClickHandler={ClickHandler}/>
          <Key label={'+'} ClickHandler={ClickHandler}/>
          <Key label={4} ClickHandler={ClickHandler}/>
          <Key label={5} ClickHandler={ClickHandler}/>
          <Key label={6} ClickHandler={ClickHandler}/>
          <Key label={'-'} ClickHandler={ClickHandler}/>
          <Key label={1} ClickHandler={ClickHandler}/>
          <Key label={2} ClickHandler={ClickHandler}/>
          <Key label={3} ClickHandler={ClickHandler}/>
          <Key label={'*'} ClickHandler={ClickHandler}/>
          <Key label={'clr'} ClickHandler={ClickHandler}/>
          <Key label={0} ClickHandler={ClickHandler}/>
          <Key label={'='} ClickHandler={ClickHandler}/>
          <Key label={'/'} ClickHandler={ClickHandler}/>
        </div>

      </div>
    </div>
  );
}

const ClickHandler = (e) => {
  e.preventDefault();
  const value  = e.target.innerHTML;
  console.log(value);
}


export default App;

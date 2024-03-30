import React, {useState} from 'react';
import Calculator from './component/Calculator'
import CalculatorOutput from './component/CalculatorOutput';
import CalculatorKeys from './component/CalculatorKeys';
import './App.css';
function App() {
const [value, setValue] = useState<string>('');

    return(
    <Calculator>
  <CalculatorOutput>{value}</CalculatorOutput>
  <CalculatorKeys>
    <button className="calculator__key calculator__key--operator" value="+" onClick={() => setValue(value + "+")}>+</button>
    <button className="calculator__key calculator__key--operator" value="-" onClick={() => setValue(value + "-")}>-</button>
    <button className="calculator__key calculator__key--operator" value="*" onClick={() => setValue(value + "*")}>x</button>
    <button className="calculator__key calculator__key--operator" value="/" onClick={() => setValue(value + "/")}>÷</button>
    <button className="calculator__key" value="7" onClick={() => setValue(value + "7")}>7</button>
    <button className="calculator__key" value="8" onClick={() => setValue(value + "8")}>8</button>
    <button className="calculator__key" value="9" onClick={() => setValue(value + "9")}>9</button>
    <button className="calculator__key" value="4" onClick={() => setValue(value + "4")}>4</button>
    <button className="calculator__key" value="5" onClick={() => setValue(value + "5")}>5</button>
    <button className="calculator__key" value="6" onClick={() => setValue(value + "6")}>6</button>
    <button className="calculator__key" value="1" onClick={() => setValue(value + "1")}>1</button>
    <button className="calculator__key" value="2" onClick={() => setValue(value + "2")}>2</button>
    <button className="calculator__key" value="3" onClick={() => setValue(value + "3")}>3</button>
    <button className="calculator__key" value="0" onClick={() => setValue(value + "0")}>0</button>
    <button className="calculator__key" value="." onClick={() => setValue(value + ".")}>.</button>
    <button className="calculator__key" value="AC" onClick={() => setValue('')}>AC</button>
    <button className="calculator__key calculator__key--enter" value="=" onClick={() => setValue(eval(value))}>=</button>
  </CalculatorKeys>
  </Calculator>
);
}

export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(0);

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        setResult(number1 / number2);
        break;
      case 'power':
        setResult(Math.pow(number1, number2));
        break;
      case 'sqrt':
        setResult(Math.sqrt(number1));
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Число" />
      <input type="text" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Число" />
      <br />
      <button onClick={() => setOperation('+')}>+</button>
      <button onClick={() => setOperation('-')}>-</button>
      <button onClick={() => setOperation('*')}>*</button>
      <button onClick={() => setOperation('/')}>/</button>
      <br />
      <button onClick={() => setOperation('power')}>Возведение в степень</button>
      <button onClick={() => setOperation('sqrt')}>Квадратный корень</button>
      <br />
      <button onClick={calculate}>Показать Ответ</button>
      <br />
      <p>ответ <span>{result}</span></p>
    </div>
  );
}

export default App;
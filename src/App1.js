import React from 'react';
import './style.css';
 
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("Not calculated yet");

  function calculate(operator) {
    const a = Number(num1);
    const b = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;

      case "-":
        setResult(a - b);
        break;

      case "*":
        setResult(a * b);
        break;

      case "/":
        setResult(b === 0 ? "Cannot divide by zero" : a / b);
        break;

      default:
        setResult("Invalid operation");
    }
  }

  return (
    <div>
      <h2>React Calculator</h2>

      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => calculate("+")}>Add (+)</button>{" "}
      <button onClick={() => calculate("-")}>Subtract (-)</button>{" "}
      <button onClick={() => calculate("*")}>Multiply (*)</button>{" "}
      <button onClick={() => calculate("/")}>Divide (/)</button>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
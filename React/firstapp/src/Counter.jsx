import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0); // declaring state variable
  const increase = () => {
    setCount(++count);
    
  };
  const decrease = () => {
    setCount(--count);
  }
  const reset = () => { 
    count = 0
    setCount(count);
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
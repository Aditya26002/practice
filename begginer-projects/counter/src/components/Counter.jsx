import React, { useState } from "react";
import "../style.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <div onClick={() => setCount(count + 1)} className="increment">
          +
        </div>
        <div onClick={() => setCount(count - 1)} className="increment">
          -
        </div>
      </div>
    </div>
  );
};

export default Counter;

import React, { useState } from "react";

export default function Lifecycle() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ margin: "50px" }}>
      <h3>Couter App Using Functional Components :</h3>
      <h2>{count}</h2>
      <button onClick={Increase}>Add</button>
    </div>
  );
}

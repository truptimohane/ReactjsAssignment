import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function IncrementDecrement() {
  const [count, setCount] = useState(0);

  // Function create for Decrement counting onClick button
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Function to Reset the count to 0
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter">
        <h1>React Web</h1>
        <div className="count">{count}</div>
        <button onClick={Decrement}>Decrement</button>
        {/* Function to Increment counting onClick button */}
        <button onClick={() => setCount((I) => I + 1)}>Increment</button> <br />
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IncrementDecrement />);

import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(42);

  const handleIncrease = () => setNumber(number + 1);
  const handleMinus = () => setNumber(number - 1);

  // console.log("Hello Word");
  return (
    <div className="bg-cyan-200 p-16">
      <div className="container max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-white">Counter</h1>
        <div className="container max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <button
            onClick={handleIncrease}
            className={`p-1 bg-cyan-300 ${number >= 50 && "invisible"}`}
          >
            increase
          </button>
          <p>{number}</p>
          <button
            onClick={handleMinus}
            className="p-1 bg-cyan-300"
            style={{ visibility: number <= 0 && "hidden" }}
          >
            minus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

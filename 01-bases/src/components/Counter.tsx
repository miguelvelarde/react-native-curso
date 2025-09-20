//import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [current, setValue] = useState<number>(10);

  const increment = (value: number) => {
    setValue(Math.max(current + value, 0));
  };

  return (
    <>
      <h3 className="text-2xl">
        Counter: <small className="font-bold">{count}</small>
      </h3>

      <button
        onClick={() => increment(+1)}
        className="p2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
      >
        +1
      </button>

      <button
        onClick={() => increment(-1)}
        className="p2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
      >
        -1
      </button>
    </>
  );
};

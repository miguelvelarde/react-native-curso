import { useState } from "react";

const MyComponent = () => {
  const [value, setValue] = useState<number>(0);

  const increaseBy = (increment: number) => {
    setValue(Math.max(value + increment, 0));
  };

  return (
    <>
      <h1>Hook Use State</h1>
      <h3 className="text-2xl">
        Incremento: <small>{value}</small>
      </h3>

      <button
        className="p2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-blue-700"
        onClick={() => increaseBy(1)}
      >
        +1
      </button>

      <button
        className="p2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-blue-700"
        onClick={() => increaseBy(-1)}
      >
        -1
      </button>
    </>
  );
};

export default MyComponent;

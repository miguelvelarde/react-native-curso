import { useMyCounter } from "../hooks/useMyCounter";

export const Counter = () => {
  const { value, increaseBy } = useMyCounter();

  return (
    <>
      <h3 className="text-2xl">
        Counter: <small className="font-bold">{value}</small>
      </h3>

      <button
        onClick={() => increaseBy(+1)}
        className="p2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
      >
        +1
      </button>

      <button
        onClick={() => increaseBy(-1)}
        className="p2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700"
      >
        -1
      </button>
    </>
  );
};

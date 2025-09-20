const SumTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

export const BasicFunction = () => {
  return (
    <>
      <h2>BasicFunction</h2>
      <p>Sum of 2 and 3 is: {SumTwoNumbers(2, 3)}</p>
    </>
  );
};

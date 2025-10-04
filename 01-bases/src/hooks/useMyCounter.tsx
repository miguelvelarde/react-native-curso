import { useState } from "react";

export const useMyCounter = () => {
  const [value, setValue] = useState<number>(10);

  const increaseBy = (newValue: number) => {
    setValue(Math.max(value + newValue, 0));
  };

  return {
    //properties
    value,

    //actions
    increaseBy,
  };
};

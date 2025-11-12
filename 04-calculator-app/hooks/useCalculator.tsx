import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "x",
  divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    //todo: calculate sub result
    setFormula(number);
  }, [number]);

  const clean = () => {
    setFormula("0");
    setNumber("0");
    setPrevNumber("0");
    lastOperation.current = undefined;
  };

  const toogleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }

    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let tempNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      tempNumber = number.substring(1);
    }

    if (tempNumber.length > 1) {
      return setNumber(currentSign + tempNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const buildNumber = (numberString: string) => {
    console.log({ numberString });

    if (number.includes(".") && numberString === ".") {
      return;
    }

    if (number.startsWith("0") || number.startsWith("-0")) {
      console.log("evaluando");
      if (numberString === ".") {
        console.log("opcion1");
        return setNumber(number + numberString);
      }

      if (numberString === "0" && number.includes(".")) {
        console.log("opcion2");
        return setNumber(number + numberString);
      }

      if (numberString !== "0" && !number.includes(".")) {
        console.log("opcion3");
        return setNumber(numberString);
      }

      if (numberString === "0" && !number.includes(".")) {
        console.log("opcion4");
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    // props
    formula,
    number,
    prevNumber,

    // methods
    buildNumber,
    clean,
    toogleSign,
    deleteLast,
  };
};

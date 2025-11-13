import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  substract = "-",
  multiply = "x",
  divide = "/",
  undefined = "`",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>(undefined);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [formula, number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  function clean() {
    setFormula("0");
    setNumber("0");
    setPrevNumber("0");
    lastOperation.current = undefined;
  }

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

  const setLastNumber = () => {
    if (number.endsWith(".")) {
      console.log(number.slice(0, -1));
      setPrevNumber(number.slice(0, -1));
    }

    setPrevNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const calculateSubResult = () => {
    const [firstNumber, operation, secondNumber] = formula.split(" ");

    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    if (isNaN(num2)) {
      return num1;
    }

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.substract:
        return num1 - num2;

      case Operator.divide:
        if (num2 === 0) {
          return 0;
        }
        return num1 / num2;

      case Operator.multiply:
        return num1 * num2;

      default:
        throw new Error(`Not supported operation ${operation}`);
    }
  };

  const finalResult = () => {
    const result = calculateSubResult();
    lastOperation.current = undefined;
    setPrevNumber("0");
    setFormula(`${result}`);
    setNumber(`${result}`);
  };

  const buildNumber = (numberString: string) => {
    // Evita agregar otro punto decimal si ya existe uno
    if (number.includes(".") && numberString === ".") {
      return;
    }

    // Manejo de números que empiezan con 0 o -0
    if (number.startsWith("0") || number.startsWith("-0")) {
      // Permite agregar el punto decimal después de 0 o -0
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      // Permite agregar ceros después del punto decimal (ej: 0.0, -0.0)
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // Reemplaza el 0 inicial por el nuevo número (excepto si es 0 o punto)
      if (numberString !== "0" && !number.includes(".")) {
        if (number.includes("-")) {
          // Si el número es negativo, conserva el signo
          return setNumber("-" + numberString);
        } else {
          // Si es positivo, simplemente asigna el nuevo número
          return setNumber(numberString);
        }
      }

      // Evita agregar más ceros si no hay punto decimal
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    // Concatenación normal de números
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
    addOperation,
    substractOperation,
    multiplyOperation,
    divideOperation,
    finalResult,
  };
};

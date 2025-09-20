//import React from "react";

export const BasicTypes = () => {
  const name: string = "Miguel";
  const age: number = 48;
  const isActive: boolean = true;
  const hobbies: string[] = ["Coffee", "Coding", "Sex", "Martial Arts"];

  return (
    <div>
      <h3>Basic Types</h3>

      <p>
        Name: {name} - Age: {age} - Status: {isActive ? "Active" : "Inactive"}
      </p>

      <p>Hobbies: {hobbies.join(", ")}</p>
    </div>
  );
};

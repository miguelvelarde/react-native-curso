//import React from 'react'

interface Person {
  name: string;
  age: number;
  isActive: boolean;
  address: Address;
}

interface Address {
  street?: string;
  city: string;
  country: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    name: "Miguel",
    age: 48,
    isActive: true,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
  };

  return (
    <>
      <div>ObjectLiterals</div>

      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

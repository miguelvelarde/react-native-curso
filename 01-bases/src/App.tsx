import "./App.css";
import Counter from "./components/Counter";
//import BasicFunction from "./typescript/BasicFunction";
//import { BasicTypes } from "./typescript/BasicTypes";
//import { ObjectLiterals } from "./typescript/ObjectLiterals";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h1 className="text-4xl mb-5">Vite + React</h1>
      {/* <BasicTypes/> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunction /> */}
      <Counter />
    </div>
  );
}

export default App;

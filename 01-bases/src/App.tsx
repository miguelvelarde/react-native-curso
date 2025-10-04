import "./App.css";

//import BasicFunction from "./typescript/BasicFunction";
//import { BasicTypes } from "./typescript/BasicTypes";
//import { ObjectLiterals } from "./typescript/ObjectLiterals";
//import MyComponente from "./components/MyComponente";
//import { Counter } from "./components/Counter";
import { AuthProvider } from "./context/AuthContext";
import { LoginPage } from "./components/LoginPage";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">Vite + React</h1>
        {/* <BasicTypes/> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunction /> */}
        {/* <Counter /> */}
        {/* <MyComponente></MyComponente> */}
        <LoginPage></LoginPage>
      </div>
    </AuthProvider>
  );
}

export default App;

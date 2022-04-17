import React from "react";
import About from "./Components/About";
import Doctor from "./Components/Doctor";
import Header from './Components/Header';
import Howitworks from "./Components/Howitworks";
import Help from "./Components/Help";
import Contact from "./Components/Contact";



function App() {
  return (
    <div className="App">
      <Header />
      <Howitworks />
      <About /> 
      <Doctor />
      <Help />
      <Contact />
    </div>
  );
}

export default App;

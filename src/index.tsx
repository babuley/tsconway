import * as React from "react";
import { render } from "react-dom";
import  Cells  from "./Cells";

import "./styles.css";


function App() {
  return (
    <>
      <Cells/>
   </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

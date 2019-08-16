import React, { useState } from "react";
import "./App.css";
import FormikForm from "./TheForm";
function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <FormikForm />
    </div>
  );
}

export default App;

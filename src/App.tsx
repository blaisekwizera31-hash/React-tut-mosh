import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <Button children="Click me" onClick = {() => console.log("Clicked!")} color="secondary"></Button>
    </div>
  );
}

export default App;

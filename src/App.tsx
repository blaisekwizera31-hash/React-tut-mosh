
import Button from "./Button";

function App() {
  return (
    <div>
    
      <Button children="Click me" onClick = {() => console.log("Clicked!")} color="danger"></Button>
    </div>
  );
}

export default App;

// import "./App.css";
import ListGroup from "./ListGroup";

function App() {
   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div className="App">
      <h1>My first app</h1>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;
 
// import Form from "./Form";

// function App() {
//   return(
//     <>
//     <Form></Form>
//   </>
//   )
// }

// export default App;

import { useState } from "react";
import ExpenseList from "./assets/expense-tracker/components/expenseList";
import Form from "./Form";
import Filter from "./assets/expense-tracker/Filter";
export const categories = ["Utilities", "Groceries", "Entertainment"];


const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "aaa",
      amount: 100,
      category: categories[0],
    },
    {
      id: 2,
      description: "bbb",
      amount: 200,
      category: categories[1],
    },
    {
      id: 3,
      description: "ccc",
      amount: 300,
      category: "Utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 400,
      category: "Utilities",
    },
  ]);
  return (
    <>
      <div>
        <Form></Form>
      </div>
      <div>
        <Filter onSelectCategory={(category) => console.log(category)} />
        <ExpenseList
          expenses={expenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
};

export default App;

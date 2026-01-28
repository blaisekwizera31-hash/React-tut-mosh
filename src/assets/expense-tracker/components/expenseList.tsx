interface Expense{
    id: number;
    description: string;
    amount: number;
    category: string;
}


interface Props{
   expenses: Expense[] 
}

const expenseList = ({expenses}:Props) => {
  return (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>
  <tbody>
      
  </tbody>
    </table>
  )
}

export default expenseList
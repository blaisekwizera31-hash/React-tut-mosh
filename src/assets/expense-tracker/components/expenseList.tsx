


interface Props{
   expenses: string[] 
}

const expenseList = () => {
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
import categories from "../../App";
const Form = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount    
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label> 
        <select  className="form-select" aria-label="Default select example" id="">
          <option value=""></option>
          {categories.map((category)=> 
                  <option key={category} value={category}>{category}</option>)
                 }
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form> 
  );
};

export default Form;

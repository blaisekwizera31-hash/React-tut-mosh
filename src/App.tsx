  
import { useEffect } from 'react'
import ProductList from './ProductList'

const App = () => {

  useEffect(() =>{
    
  })
  return (
    <div>
      <select className="form-select">
        <option value="">household</option>
        <option value="">clothing</option>
        <option value="">prod1</option>
        <option value="">prod2  </option>
      </select>
      <ProductList></ProductList>
    </div>
  )
}

export default App
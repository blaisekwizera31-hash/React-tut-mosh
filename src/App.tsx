  
import { useState } from 'react'
import ProductList from './ProductList'

const App = () => {
  const [category, setCategory] =  useState('')

  return (
    <div>
      <select className="form-select" onChange={(e) =>setCategory(e.target.value)}>
        <option value="">household</option>
        <option value="">clothing</option>
        <option value="">prod1</option>
        <option value="">prod2  </option>
      </select>
      <ProductList/>
    </div>
  )
}

export default App 
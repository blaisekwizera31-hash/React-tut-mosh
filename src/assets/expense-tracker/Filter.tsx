import React from 'react'

const Filter = () => {
  return (
    <select className="form-select">
        <option value="">All </option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
    </select>
  )
}

export default Filter
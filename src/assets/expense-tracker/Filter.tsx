import {categories} from "src/assets/App.tsx";
interface Props{
  onSelectCategory: (category: string) => void;  
}

const Filter = ({onSelectCategory}: Props) => {
  return (
    <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All </option>
       {categories.map((category)=> 
        <option key={category} value={category}>{category}</option>)
       }</select>
  )
}

export default Filter
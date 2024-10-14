import  { useState } from 'react';
import axios from "axios";

const App = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [servings, setServings] = useState('');
  const [category, setCategory] = useState('');

    const handlesubmit = (e)=>{
      e.preventDefault();
        axios.post("http://localhost:3000/api/create")
        .then(resp=>console.log(resp))
        .catch(e=>console.log(e));
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input value={name} type='text' onChange={(e)=>setName(e.target.value)}/>
        <input value={ingredients} type='text' onChange={(e)=>setIngredients(e.target.value)}/>
        <input value={instructions} type='text' onChange={(e)=>setInstructions(e.target.value)}/>
        <input value={preparationTime} type='text' onChange={(e)=>setPreparationTime(e.target.value)}/>
        <input value={servings} type='text' onChange={(e)=>setServings(e.target.value)}/>
        <input value={category} type='text' onChange={(e)=>setCategory(e.target.value)}/>
        <button type='submit'> submit</button>
      </form>
    </div>
  )
}

export default App

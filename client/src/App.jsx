import { useState } from 'react';
import axios from "axios";

const App = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(''); // To capture and display errors

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation to check if all fields are filled
    if (!name || !ingredients || !instructions || !preparationTime || !category) {
      setError("Please fill in all fields.");
      return;
    }

    const formdata = {
      name,
      ingredients,
      instructions,
      preparationTime,
      category
    };

    console.log(formdata);

    axios.post("http://localhost:3000/api/create", formdata)
      .then(resp => {
        console.log(resp);
        setError(''); // Clear error on successful submission
      })
      .catch(e => {
        console.log(e);
        setError("Error creating the recipe. Please try again.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={name} 
          type='text' 
          placeholder="Recipe Name"
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          value={ingredients} 
          type='text' 
          placeholder="Ingredients"
          onChange={(e) => setIngredients(e.target.value)} 
        />
        <input 
          value={instructions} 
          type='text' 
          placeholder="Instructions"
          onChange={(e) => setInstructions(e.target.value)} 
        />
        <input 
          value={preparationTime} 
          type='text' 
          placeholder="Preparation Time"
          onChange={(e) => setPreparationTime(e.target.value)} 
        />
        <input 
          value={category} 
          type='text' 
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)} 
        />
        <button type='submit'>Submit</button>
      </form>

      {/* Display error message if there is any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default App;

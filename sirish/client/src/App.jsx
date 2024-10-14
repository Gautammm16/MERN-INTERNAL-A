import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name,setName] = useState("");
  const [timetaken,setTimeTaken] = useState("");
  const [cateogry,setCategory] = useState("");

  const handleSubmit =()=>{
    axios.post("http://localhost:3000/api/createrec",{name,timetaken,cateogry})
    .then(resp=>console.log(resp))
    .catch(e=>console.log(e));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

      <input  type="text" onChange={(e)=>setName(e.target.value)} />
      <input  type="text" onChange={(e)=>setTimeTaken(e.target.value)}/>
      <input  type="text" onChange={(e)=>setCategory(e.target.value)}/>
      
        <button type="submit">Add Receipe</button>
      </form>
    </div>
  )
}

export default App

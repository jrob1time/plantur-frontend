import './NewPlant.css'
import { useState } from "react"

interface NewPlantProps {
// Props type definition goes here
}

const NewPlant: React.FC<NewPlantProps> = (props) => {
  return (
  <main className="new">
  <h1>NEW PLANT</h1>
  <form autoComplete="off">
  <label htmlFor="name-input">Name</label>
  <input
         required
         type="text"
         name="name"
         id="name-input"
         placeholder="Name"
       />
           <label htmlFor="title-input">Species</label>
    <input
      required
      type="text"
      name="name"
      id="name-input"
      placeholder="Species"
    />

    <label htmlFor="breed-input">Light</label>
    <input
      required
      type="text"
      name="Light"
      id="light-input"
      placeholder="Light"
    />

    <label htmlFor="water-input">Water</label>
    <select
      required
      name="water"
      id="water-input"
    >
      <option value="Light">Light</option>
      <option value="Moderate">Moderate</option>
      <option value="Generous">Generous</option>
    </select>
    
    <button type="submit">SUBMIT</button>
  </form>
</main>
)
}

export default NewPlant
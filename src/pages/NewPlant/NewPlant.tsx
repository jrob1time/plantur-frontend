import './NewPlant.css'
import { useState } from "react"

interface NewPlantProps {
  handleAddPlant: (plant: Plant) => void
}

interface Plant {
  name: string
  species: string
  light: string
  water: 'Light' | 'Moderate' | 'Generous'
}

const NewPlant: React.FC<NewPlantProps> = (props) => {
  const [form, setForm] = useState<Plant>({
    name: '',
    species: '',
    light: '',
    water: 'Moderate',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    props.handleAddPlant(form)
    setForm({
      name: '',
      species: '',
      light: '',
      water: 'Moderate',
    })
  }

  return (
    <main className ="new">
      <h1>NEW PLANT</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="species-input">Species</label>
        <input
          required
          type="text"
          name="species"
          id="species-input"
          placeholder="Species"
          value={form.species}
          onChange={handleChange}
        />

        <label htmlFor="light-input">Light</label>
        <input
          required
          type="text"
          name="light"
          id="light-input"
          placeholder="Light"
          value={form.light}
          onChange={handleChange}
        />

        <label htmlFor="water-input">Water</label>
        <select
          required
          name="water"
          id="water-input"
          value={form.water}
          onChange={handleChange}
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

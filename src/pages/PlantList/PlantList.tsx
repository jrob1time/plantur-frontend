import React, {useState} from 'react';
import EditPlantCard from '../../components/EditPlant/EditPlant';

// services
import * as plantService from '../../services/plantService'

import styles from './PlantList.module.css'

enum Water {
  LIGHT = 'Light',
  MODERATE = 'Moderate',
  GENEROUS = 'Generous',
  OTHER = 'Other'
}

interface Plant {
  id: string;
  name: string;
  species: string;
  light: string;
  water: Water;
}

interface PlantListProps {
  plants: Plant[];
  fetchPlants: ()=> void
}



const PlantList: React.FC<PlantListProps> = ({ plants, fetchPlants }) => {
  
  const [form, setForm] = useState<number>(-1)
  const handleEditPlant = (evt: React.FormEvent<HTMLFormElement>, plantId:number) => {
    evt.preventDefault()
    setForm(plantId)
  }

  const handleUpdatePlant = async (plant:Plant)=> {
    await plantService.update(plant, form)
    setForm(-1)
    await fetchPlants()
  }
  

  return (

    <main className={styles.container}> 
<h1>PLANT LIST</h1>  
      {plants.map((plant) => plant.id===form? <EditPlantCard handleUpdatePlant={handleUpdatePlant} plant={plant}/>: (
<section class={styles.card}>
  <div key={plant.id}>
   <h2>{plant.name.toUpperCase()}</h2>
    <p>SPECIES: {plant.species}</p>
    <p>LIGHT NEEDED: {plant.light}</p>
    <p> WATER NEEDED: {plant.water}</p>
    <button onClick={(evt: React.FormEvent<HTMLFormElement>) => handleEditPlant(evt, plant.id)}>Edit Plant </button>
  </div>
</section>
))}
    </main>
  );
};


export default PlantList;

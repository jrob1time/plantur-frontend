import React, {useState} from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';
import EditPlantCard from '../../components/EditPlant/EditPlant';

// services
import * as authService from '../../services/authService'

enum Water {
  LIGHT = 'Light',
  MODERATE = 'Moderate',
  GENEROUS = 'Generous',
  OTHER = 'Other'
}

interface Plant {
  _id: string;
  name: string;
  species: string;
  light: string;
  water: Water;
}

interface PlantListProps {
  plants: Plant[];
}



const PlantList: React.FC<PlantListProps> = ({ plants }) => {
  
  const [form, setForm] = useState<number>(-1)
  const handleEditPlant = (evt: React.FormEvent<HTMLFormElement>, plantId:number) => {
    evt.preventDefault()
    setForm(plantId)
  }
  

  return (
    <div>
      <h1>PLANT LIST</h1>
      
      {plants.map((plant, idx) => idx===form? <EditPlantCard plant={plant}/>: (
        <div key={plant._id}>
          
          <h2>NAME: {plant.name}</h2>
          <p>SPECIES: {plant.species}</p>
          <p>LIGHT NEEDED: {plant.light}</p>
          <p> WATER NEEDED: {plant.water}</p>
          <button onClick={(evt: React.FormEvent<HTMLFormElement>) => handleEditPlant(evt, idx)}>Edit Plant </button>
        </div>
      ))}
    </div>
  );
};


export default PlantList;

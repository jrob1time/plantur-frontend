import React from 'react';
import PlantCard from '../../components/PlantCard/PlantCard'

interface Plant {
  _id: string;
  name: string;
  species: string;
  light: string;
  water: Water.OTHER;
}

enum Water {
  LIGHT = 'Light',
  MODERATE = 'Moderate',
  GENEROUS = 'Generous',
  OTHER = 'Moderate'
}

interface PlantListProps {
  plants: Plant[];
  handleDeletePlant: (_id: string) => Promise<void>;
}

function PlantList({ plants, handleDeletePlant }: PlantListProps): JSX.Element {
  const handleDelete = async (_id: string): Promise<void> => {
    await handleDeletePlant(_id);
  };

  return (
    <div>
      <h1>Plant List</h1>
      {plants.map((plant) => (
        <div key={plant._id}>
          <h2>{plant.name}</h2>
          <p>{plant.species}</p>
          <p>{plant.light}</p>
          <p>{plant.water}</p>
          <button onClick={() => handleDeletePlant(plant._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}


export default PlantList;

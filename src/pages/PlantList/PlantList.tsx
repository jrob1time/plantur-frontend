import React from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';

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
  return (
    <div>
      <h1>PLANT LIST</h1>
      {plants.map((plant) => (
        <div key={plant._id}>
          <h2>{plant.name}</h2>
          <p>{plant.species}</p>
          <p>{plant.light}</p>
          <p>{plant.water}</p>
        </div>
      ))}
    </div>
  );
};

export default PlantList;

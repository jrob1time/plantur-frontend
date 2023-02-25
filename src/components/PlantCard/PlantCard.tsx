import React from 'react';

interface Plant {
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

interface Props {
  plant: Plant;
}

const PlantCard: React.FC<Props> = ({ plant }) => {
  return (
    <li className="card">
      <h2>{plant.name}</h2>
      <p>{plant.species}</p>
      <p>{plant.light}</p>
      <p>{plant.water}</p>
    </li>
    
  );
};

export default PlantCard;

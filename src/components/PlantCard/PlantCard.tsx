import React, { FC } from 'react';

interface Props {
  plant: {
    name: string;
    species: string;
    light: string;
    water: Water.OTHER;
  };
}
enum Water {
  LIGHT = 'Light',
  MODERATE = 'Moderate',
  GENEROUS = 'Generous',
  OTHER = 'Moderate'
}


const PlantCard: FC<Props> = ({ plant }) => {
  console.log(plant);
  
  return (
    <li>
      <section>
        <button>X</button>
      </section>
      <h2>{plant.name}</h2>
    </li>
  );
};

export default PlantCard;

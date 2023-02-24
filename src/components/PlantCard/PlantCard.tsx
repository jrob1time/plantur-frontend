import React from 'react';

interface PlantCardProps {
  plant: {
    name: string;
    species: string;
    light: string;
    water: Water;
  };
}

enum Water {
  LIGHT = 'Light',
  MODERATE = 'Moderate',
  GENEROUS = 'Generous',
  OTHER = 'Moderate'
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <li>
      <section>
        <button>
          X
        </button>
      </section>
      <h2>{plant.name.toUpperCase()}</h2>
    </li>
  );
};

export default PlantCard;

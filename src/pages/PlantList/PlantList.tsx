import React from 'react';
import PlantCard from '../../components/PlantCard/PlantCard'


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

const PlantList: React.FC<{ plants: Plant[] }> = ({ plants }) => {
  return (
    <main className="list">
      <h1>PLANT LIST</h1>

      {!plants.length && <h2>Oops! No plants here!</h2>}

      <ul>
        {plants.map((plant) => (
          <li key={plant.name}>
            <PlantCard plant={plant} />
          </li>
        ))}
      </ul>

    </main>
  );
};

export default PlantList;

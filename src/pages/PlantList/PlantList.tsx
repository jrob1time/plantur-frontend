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
  plants: Plant[];
}

const PlantList: React.FC<Props> = (props) => {
  return (
    <main className="list">
      <h1>PLANT LIST</h1>

      {!props.plants.length && <h2>Oops! No plants here!</h2>}

      <ul>
        {props.plants.map((plant) => (
          <li key={plant._id}>
            {plant.name}
          </li>
        ))}
      </ul>

    </main>
  );
};

export default PlantList;

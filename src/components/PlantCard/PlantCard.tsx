import React, { FC } from 'react';

interface Props {
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

const PlantCard: FC<Props> = ({ name, species, light, water }) => {
  return (
    <li>
      <section>
        <button>X</button>
      </section>
      <h2>{name}</h2>
      <p>{`${species} and ${light} and ${water}`}</p>
    </li>
  );
};

export default PlantCard;

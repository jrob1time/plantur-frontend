import React from "react";
import styles from "./Plant.module.css";

interface Plant {
  name: string;
  species: string;
  light: string;
  water: Water.OTHER;
}

enum Water {
  LIGHT = "Light",
  MODERATE = "Moderate",
  GENEROUS = "Generous",
  OTHER = "Moderate",
}

interface Props {
  plant: Plant;
}

const PlantCard: React.FC<Props> = ({ plant }) => {
  return (
    <main className={styles.container}>
      <li className="card">
        <h2>{plant.name}</h2>
        <p>{plant.species}</p>
        <p>{plant.light}</p>
        <p>{plant.water}</p>
      </li>
    </main>
  );
};

export default PlantCard;

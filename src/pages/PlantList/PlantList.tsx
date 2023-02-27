import React, { useState } from "react";
import EditPlantCard from "../../components/EditPlant/EditPlant";
import * as plantService from "../../services/plantService";
import styles from "./PlantList.module.css";

enum Water {
  LIGHT = "Light",
  MODERATE = "Moderate",
  GENEROUS = "Generous",
  OTHER = "Moderate",
}

interface Plant {
  id: string;
  name: string;
  species: string;
  light: string;
  water: Water.OTHER;
}

interface PlantListProps {
  plants: Plant[];
  fetchPlants: () => void;
}

interface FormState {
  id: string;
  form: number;
}

const PlantList: React.FC<PlantListProps> = ({ plants, fetchPlants }) => {
  const [state, setState] = useState<FormState>({ id: "", form: -1 });

  const handleEditPlant = (evt: React.MouseEvent<HTMLButtonElement>, plantId: string) => {
    evt.preventDefault();
    setState({ id: plantId, form: parseInt(plantId) });
  };

  const handleUpdatePlant = (plant: Plant) => {
    plantService.update(plant, parseInt(state.id));
    setState({ id: "", form: -1 });
    fetchPlants();
  };

  return (
    <main className={styles.container}>
      <h1>PLANT LIST</h1>
      {plants.map((plant) =>
        plant.id === state.id ? (
          <EditPlantCard key={plant.id} handleUpdatePlant={handleUpdatePlant} plant={plant} />
        ) : (
          <section className={styles.card} key={plant.id}>
            <div>
              <h2>{plant.name.toUpperCase()}</h2>
              <p>SPECIES: {plant.species}</p>
              <p>LIGHT NEEDED: {plant.light}</p>
              <p> WATER NEEDED: {plant.water}</p>
              <button
                onClick={(evt: React.MouseEvent<HTMLButtonElement>) => handleEditPlant(evt, plant.id)}
              >
                Edit Plant{" "}
              </button>
            </div>
          </section>
        )
      )}
    </main>
  );
};

export default PlantList;

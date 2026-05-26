import React from "react";
import styles from "./Ordenamiento.module.css";

const Ordenamiento = ({ campo, direccion, onCampoChange, onDireccionChange }) => {
  return (
    <div className={styles.ordenamiento}>
      <select value={campo} onChange={(e) => onCampoChange(e.target.value)}>
        <option value="anio">Año</option>
        <option value="rating">Rating</option>
      </select>


      <select value={direccion} onChange={(e) => onDireccionChange(e.target.value)}>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
};

export default Ordenamiento;

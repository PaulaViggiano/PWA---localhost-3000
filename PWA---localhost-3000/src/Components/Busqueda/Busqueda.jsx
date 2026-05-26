import React from "react";
import Styles from "./Busqueda.module.css";

const Busqueda = ({ valor, onChange, campoFiltro, onCampoChange }) => {
  return (
    <div className={Styles.busqueda}>
      {/* INPUT */}
      <div className={Styles.inputWrapper}>
        <span className={Styles.icon}>🔍</span>
        <input
          type="text"
          placeholder="Buscar ..."
          value={valor}
          onChange={(e) => onChange(e.target.value)}
        />
        {valor && (
          <button
            className={Styles.clearBtn}
            onClick={() => onChange("")}
          >
            ✖
          </button>
        )}
      </div>

      {/* SELECT */}
      <div className={Styles.selectWrapper}>
        <select
          value={campoFiltro}
          onChange={(e) => onCampoChange(e.target.value)}
        >
          <option value="search">Todos</option>
          <option value="Titulo">Título</option>
          <option value="Director">Director</option>
          <option value="Genero">Género</option>
        </select>
        <span className={Styles.arrow}>▼</span>
      </div>
    </div>
  );
};

export default Busqueda;
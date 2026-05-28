import React, { useState, useEffect } from "react";
import styles from "./Formulario.module.css";
import Boton from "../Boton/Boton";


function Formulario({ onSubmit, itemAEditar }) {
  const [titulo, setTitulo] = useState("");
  const [director, setDirector] = useState("");
  const [anio, setAnio] = useState("");
  const [genero, setGenero] = useState("Acción");
  const [popularidad, setPopularidad] = useState("");
  const [tipo, setTipo] = useState("Pelicula");

  useEffect(() => {
    if (itemAEditar) {
      // Si recibimos un item, llenamos los inputs con sus datos
      setTitulo(itemAEditar.Titulo);
      setDirector(itemAEditar.Director);
      setAnio(itemAEditar.Anio);
      setGenero(itemAEditar.Genero);
      setPopularidad(itemAEditar.Popularidad);
      setTipo(itemAEditar.Tipo);
    } else {
      // Si es null (nuevo item), limpiamos los inputs
      setTitulo("");
      setDirector("");
      setAnio("");
      setGenero("Acción");
      setPopularidad("");
      setTipo("Pelicula");
    }
  }, [itemAEditar]); 
  // El [itemAEditar] al final le dice a React: "Ejecuta este código cada vez que la prop itemAEditar cambie".

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoItem = {
      Id: itemAEditar ? itemAEditar : Date.now(),
      Titulo: titulo,
      Director: director,
      Anio: parseInt(anio),
      Genero: genero,
      Popularidad: parseInt(popularidad),
      Tipo: tipo,
      Vista: itemAEditar ? itemAEditar.Vista : false,
    };

    onSubmit(nuevoItem);

    // Limpiamos el formulario
    setTitulo("");
    setDirector("");
    setAnio("");
    setGenero("Acción");
    setPopularidad("");
    setTipo("Pelicula");
  };

  return (
    <div className={styles.formContainer}>
      <h1>{itemAEditar ? "Editar Película/Serie" : "Nueva Película/Serie"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="ejemplo: La princesa y el sapo"
            required
          />
        </label>

        <label>
          Director:
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            placeholder="ejemplo: Christopher Nolan"
            required
          />
        </label>

        <div className={styles.row}>
          <label>
            Año:
            <input
              type="text"
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              placeholder="ejemplo: 2011"
              min="1900"
              max="2026"
              required
            />
          </label>

          <label>
            Puntaje (1-10):
            <input
              type="number"
              value={popularidad}
              onChange={(e) => setPopularidad(e.target.value)}
              min="1"
              max="10"
              required
            />
          </label>
        </div>

        <div className={styles.row}>
          <label>
            Género:
            <select
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              required
            >
               <option value="Acción">Acción</option>
               <option value="Comedia">Comedia</option>
               <option value="Drama">Drama</option>
               <option value="Terror">Terror</option>
               <option value="Ciencia Ficción">Ciencia Ficción</option>
               <option value="Romance">Romance</option>
               <option value="Documental">Documental</option>
               <option value="Animación">Animación</option>
               <option value="Fantasía">Fantasía</option>
            </select>
          </label>

          <label>
            Tipo:
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
            >
              <option value="Pelicula">Película</option>
              <option value="Serie">Serie</option>
            </select>
          </label>
        </div>

        <Boton texto="Guardar" variante="primary" type="submit"/>
      </form>
    </div>
  );
}

export default Formulario;

import React,{ useState, useEffect } from 'react';
import { initialData } from '../../Data/initialData';
import  ListaContenido  from '../../Components/ListaContenido/ListaContenido.jsx';
import styles from './Home.module.css'

const Home = () => {
  // Inicializamo estado.
  // Peliculas/Series guardados en localStorage ó initialData
  const [items, setItems] = useState (() => {
    const itemsGuardados = localStorage.getItem('peliculas-series');

    return itemsGuardados ? JSON.parse(itemsGuardados) : initialData;
  });

  // Después de que 'items' se renderiza, ejecutamos el useEffect para guardarlo en el localStorage
  useEffect(() => {
    localStorage.setItem('peliculas-series', JSON.stringify(items));
  }, [items]);

  const porVer = items.filter(item => !item.Vista);
  const vistas = items.filter(item => item.Vista);

  return (
    <main className={styles.homeContainer}>
      {/* FILA 1: CONTENIDO POR VER */}
      <ListaContenido
        titulo='Por ver'
        items={porVer}
        mensajeVacio='No tienes peliculas o series pendientes. Agrega una!'
      />

      {/* FILA 2: CONTENIDO VISTO */}
      <ListaContenido
        titulo='Ya vistas'
        items={vistas}
        mensajeVacio='Aún no has visto nada. Mira una pelicula!'
      />

    </main>
  )
}

export default Home;
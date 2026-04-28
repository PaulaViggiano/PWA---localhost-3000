import React,{ useState, useEffect } from 'react';
import { initialData } from '../../Data/initialData';
import  ListaContenido  from '../../Components/ListaContenido/ListaContenido.jsx';
import styles from './Home.module.css'
import Header from '../../Components/Header/Header.jsx';

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

  const agregarItem = (nuevoItem) => {
    setItems([...items, nuevoItem]);
  };

  const eliminarItem = (id) => {
    const confirmar = window.confirm("Estás seguro de eliminar este elemento?");

    if(confirmar){
      const nuevaLista = items.filter(item => item.Id !== id);
      setItems(nuevaLista);
    }
  }

  return (
   
    <main className={styles.homeContainer}> 
    <Header onAgregarItem={agregarItem} />
      {/* FILA 1: CONTENIDO POR VER */}
      <ListaContenido
        titulo='Por ver'
        items={porVer}
        mensajeVacio='No tienes peliculas o series pendientes. Agrega una!'
        onEliminar={eliminarItem}
      />

      {/* FILA 2: CONTENIDO VISTO */}
      <ListaContenido
        titulo='Ya vistas'
        items={vistas}
        mensajeVacio='Aún no has visto nada. Mira una pelicula!'
        onEliminar={eliminarItem}
      />

    </main>
  );
};

export default Home;
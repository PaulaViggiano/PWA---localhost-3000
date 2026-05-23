import React,{ useState, useEffect } from 'react';
import { initialData } from '../../Data/initialData';
import ListaContenido from '../../Components/ListaContenido/ListaContenido.jsx';
import styles from './Home.module.css';
import Header from '../../Components/Header/Header.jsx';

const Home = () => {
  const [items, setItems] = useState(() => {
    const itemsGuardados = localStorage.getItem('peliculas-series');
    return itemsGuardados ? JSON.parse(itemsGuardados) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('peliculas-series', JSON.stringify(items));
  }, [items]);

  const porVer = items.filter(item => !item.Vista);
  const vistas = items.filter(item => item.Vista);

  const agregarItem = (nuevoItem) => {
    setItems([...items, nuevoItem]);
  };

  const eliminarItem = (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar este elemento?");
    if (confirmar) {
      const nuevaLista = items.filter(item => item.Id !== id);
      setItems(nuevaLista);
    }
  };

  const toggleVista = (id) => {
    const nuevaLista = items.map((item) =>
      item.Id === id ? { ...item, Vista: !item.Vista } : item
    );
    setItems(nuevaLista);
  };

  return (
    <main className={styles.homeContainer}> 
      <Header onAgregarItem={agregarItem} />

      <ListaContenido
        titulo="Por ver"
        items={porVer}
        mensajeVacio="No tienes películas o series pendientes. ¡Agrega una!"
        onEliminar={eliminarItem}
        onToggleVista={toggleVista}
      />

      <ListaContenido
        titulo="Ya vistas"
        items={vistas}
        mensajeVacio="Aún no has visto nada. ¡Mira una película!"
        onEliminar={eliminarItem}
        onToggleVista={toggleVista}
      />
    </main>
  );
};

export default Home;

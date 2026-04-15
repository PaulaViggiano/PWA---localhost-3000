import React,{ useState, useEffect } from 'react';
import { initialData } from '../../Data/initialData';
import  ListaContenido  from '../../Components/ListaContenido/ListaContenido';

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

  return (
    <>
      <ListaContenido items={items} />
    </>
  )
}

export default Home;
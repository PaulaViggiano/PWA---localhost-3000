import React, { useState, useEffect } from 'react';
import { initialData } from '../../Data/initialData';
import ListaContenido from '../../Components/ListaContenido/ListaContenido.jsx';
import styles from './Home.module.css';
import Header from '../../Components/Header/Header.jsx';
import Busqueda from '../../Components/Busqueda/Busqueda.jsx';
import Ordenamiento from '../../Components/Ordenamiento/Ordenamiento.jsx';

const Home = () => {
  const [filtro, setFiltro] = useState('');
  const [campoFiltro, setCampoFiltro] = useState('search');
  const [ordenCampo, setOrdenCampo] = useState('anio');       // 'anio' o 'rating'
  const [ordenDireccion, setOrdenDireccion] = useState('asc'); // 'asc' o 'desc'

  const [items, setItems] = useState(() => {
    const itemsGuardados = localStorage.getItem('peliculas-series');
    return itemsGuardados ? JSON.parse(itemsGuardados) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('peliculas-series', JSON.stringify(items));
  }, [items]);

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

  //  FILTRO DE BUSQUEDA
  const listaFiltrada = items.filter((item) => {
    const valorNormalizado = filtro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (campoFiltro === "search") {
      return (
        item.Titulo.toLowerCase().includes(valorNormalizado) ||
        item.Director.toLowerCase().includes(valorNormalizado) ||
        item.Genero.toLowerCase().includes(valorNormalizado)
      );
    } else {
      const campo = item[campoFiltro]?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return campo.includes(valorNormalizado);
    }
  });

  //  ORDENAMIENTO
  const listaOrdenada = [...listaFiltrada].sort((a, b) => {
    const campoA = ordenCampo === 'anio' ? Number(a.Anio) : Number(a.Rating);
    const campoB = ordenCampo === 'anio' ? Number(b.Anio) : Number(b.Rating);
    return ordenDireccion === 'asc' ? campoA - campoB : campoB - campoA;
  });

  // CONTADORES
const totalPorVer = listaOrdenada.filter(item => !item.Vista).length;
const totalVistas = listaOrdenada.filter(item => item.Vista).length;

// Conteo por género
const conteoPorGenero = listaFiltrada.reduce((acc, item) => {
  acc[item.Genero] = (acc[item.Genero] || 0) + 1;
  return acc;
}, {});


  return (
    <> 
      <Header onAgregarItem={agregarItem} />
      <main className={styles.homeMain}>

        {/* FRANJA DE GÉNEROS */}
        <div className={styles.generosFranja}>
          {Object.entries(conteoPorGenero).map(([genero, cantidad]) => (
            <span key={genero} className={styles.generoItem}>
              {genero}: {cantidad}
            </span>
          ))}
        </div>

        {/* BUSCADOR + ORDENAMIENTO */}
        <div className={styles.filtrosContainer}>
          <Busqueda
            valor={filtro}
            onChange={setFiltro}
            campoFiltro={campoFiltro}
            onCampoChange={setCampoFiltro}
          />

          <Ordenamiento
            campo={ordenCampo}
            direccion={ordenDireccion}
            onCampoChange={setOrdenCampo}
            onDireccionChange={setOrdenDireccion}
          />
        </div>

        {/* LISTAS */}
        <ListaContenido
          titulo={`Por ver (${totalPorVer})`}
          items={listaOrdenada.filter(item => !item.Vista)}
          mensajeVacio="No tienes películas o series pendientes. ¡Agrega una!"
          onEliminar={eliminarItem}
          onToggleVista={toggleVista}
        />

        <ListaContenido
          titulo={`Ya vistas (${totalVistas})`}
          items={listaOrdenada.filter(item => item.Vista)}
          mensajeVacio="Aún no has visto nada. ¡Mira una película!"
          onEliminar={eliminarItem}
          onToggleVista={toggleVista}
        />
      </main>
    </>
  );
};

export default Home;

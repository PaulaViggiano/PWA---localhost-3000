import React from 'react';
import styles from './ListaContenido.module.css';
import Item from '../Item/Item.jsx';

const ListaContenido = ({ titulo, items, mensajeVacio, onEliminar, onToggleVista, onEditar }) => {
  return (
    <section className={styles.seccionLista}>
      <h2 className={styles.tituloLista}>{titulo}</h2>

      {items.length === 0 ? (
        <div className={styles.contenedorVacio}>
          <p>{mensajeVacio}</p>
        </div>
      ) : (
        <div className={styles.carrusel}>
          {items.map((item) => (
            <Item
              key={item.Id}
              item={item}
              onEliminar={onEliminar}
              onToggleVista={onToggleVista}
              onEditar={onEditar}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ListaContenido;

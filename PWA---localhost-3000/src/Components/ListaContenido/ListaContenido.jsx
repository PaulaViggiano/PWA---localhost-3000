import React from 'react';  
import styles from './ListaContenido.module.css';
import Item from '../Item/Item.jsx';

const ListaContenido = ({titulo, items, mensajeVacio, onEliminar}) => {

    return(
        <section className={styles.seccionLista}>
            <h2 className={styles.tituloLista}>{titulo}</h2>
            {/* Si no hay Items(Peliculas) muestro msanjes */}
            {items.length === 0 ? (
                <div className={styles.contenedorVacio}>
                    <p>{mensajeVacio}</p>
                </div>
            ) : (
                <div className={styles.cuadricula}>
                    {items.map((item) => (
                        <Item 
                            key={item.Id}
                            item={item} 
                            onEliminar ={onEliminar}
                        />
                    ))}
                </div>
                
            )}
        </section>
    );
};

export default ListaContenido;
import React from 'react';  
import styles from './ListaContenido.module.css';
import Item from '../Item/Item.jsx';

const ListaContenido = ({items}) => {

    return(
        <>
            {items.map((item) => (
                <Item key={item.Id} item={item} />
            ))}
        </>
    )
};

export default ListaContenido;
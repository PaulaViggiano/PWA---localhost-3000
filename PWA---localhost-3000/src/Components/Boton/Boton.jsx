import React from 'react';
import styles from './Boton.module.css';

const Boton = ({ texto, onClick, clase }) => {
  // Texto -> lo que se muestra de mensaje en el boton
  // onClick -> funcion que se ejecuta al dar click
  // clase -> estilo distintivos de los estilos base
  return (
    <button 
      className={`${styles.botonBase} ${styles[clase] || ''}`} 
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Boton;
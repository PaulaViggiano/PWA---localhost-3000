import React from 'react';
import styles from './Boton.module.css';

const Boton = ({ texto, onClick, variante = "primary", type = "button" }) => {
  // Diccionario de variantes que mapea a clases CSS
  const dicVariantes = {
    primary: `${styles.botonBase}`,                // Azul por defecto
    secondary: `${styles.botonBase} ${styles.btnSecondary}`, // Gris secundario
    danger: `${styles.botonBase} ${styles.btnDanger}`,       // Rojo destructivo
    agregar: `${styles.botonBase} ${styles.btnAgregar}`,     // Futuro estilo para agregar
  };

  const estilos = dicVariantes[variante] || dicVariantes.primary;

  return (
    <button type={type} onClick={onClick} className={estilos}>
      {texto}
    </button>
  );
};

export default Boton;
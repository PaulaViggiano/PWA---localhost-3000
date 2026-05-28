import React, { useState } from "react";
import Formulario from "../Formulario/Formulario";
import Titulo from "../Titulo/Titulo";
import Modal from "../Modal/Modal";
import styles from "./Header.module.css";
import Boton  from "../Boton/Boton";

const Header = ({ onAgregarItem }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Titulo texto="Películas y Series" />
         <div className={styles.right}> 
                    <Boton 
                        texto='Agregar' 
                        onClick={() => setShowForm(true)}
                        variante='agregar'
                    /> 
        </div>
      </nav>

      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <Formulario
          onSubmit={(nuevoItem) => {
            onAgregarItem(nuevoItem);
            setShowForm(false); // cerrar modal al guardar
          }}
        />
      </Modal>
    </header>
  );
};

export default Header;

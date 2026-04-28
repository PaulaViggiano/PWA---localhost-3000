import React, {useState} from 'react';
import styles from './Header.module.css';
import Titulo from '../Titulo/Titulo'
import Boton from '../Boton/Boton.jsx';
import Formulario from '../Formulario/Formulario.jsx';

function Header ({onAgregarItem}) {

  const [showForm, setShowForm] = useState(false);

  const handleNuevoItem = (nuevoItem) => {
    onAgregarItem(nuevoItem);
    setShowForm(false);
  };         

    return ( 
            <nav className={styles.nav}>    
                <div className={styles.left}> 
                    <Titulo texto='Peliculas Y Series' />
                </div>
                   {showForm && 
                    <div className={styles.modalOverlay}>
                        <div className={styles.modalContent}>
                            <Formulario onSubmit={handleNuevoItem} />
                            <button className={styles.closeBtn} onClick={() => setShowForm(false)}>X</button>
                        </div>
                    </div>
                }
                <div className={styles.right}> 
                    <Boton 
                        texto='+' 
                        onClick={() => setShowForm(true)}
                        clase='btn-agregar'
                    /> 
                </div>
            </nav>  
            );
}

export default Header;
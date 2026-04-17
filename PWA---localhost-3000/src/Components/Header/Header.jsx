import React, {useState} from 'react';
import styles from './Header.module.css';
import Titulo from '../Titulo/Titulo'
import Boton from '../Boton/Boton.jsx';
import Formulario from '../Formulario/Formulario.jsx';

function Header () {

  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
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
                            <Formulario onSubmit={handleCloseForm} />
                            <button className={styles.closeBtn} onClick={handleCloseForm}>X</button>
                        </div>
                    </div>
                }
                <div className={styles.right}> 
                    <Boton 
                        texto='+' 
                        onClick={handleOpenForm}
                        clase='btn-agregar'
                    /> 
                </div>
            </nav>  
            );
}

export default Header;
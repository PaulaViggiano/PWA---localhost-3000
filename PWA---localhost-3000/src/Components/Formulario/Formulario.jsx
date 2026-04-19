import React from "react";
import styles from './Formulario.module.css';
import Boton from '../Boton/Boton';

function Formulario({ onSubmit }) {
    
  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    onSubmit();         // cierra el formulario
  };   

    return (
        <div className={styles.formContainer}>
            <h1>Nueva Pelicula/Serie</h1>
            <form onSubmit={handleSubmit}>
                 <div className={styles.row}>
                    <span>Tipo:</span>
                        <label>
                            <input type="radio" name="tipo" value="pelicula" required />
                            Película
                        </label>
                        <label>
                            <input type="radio" name="tipo" value="serie" required />
                            Serie
                        </label>
                    </div>
                <label>
                    Nombre: 
                    <input 
                    type="text" 
                    name="nombre"
                    placeholder="ejemplo: La princesa y el sapo"
                    required
                    />
                </label>
                <label>
                    Director: 
                    <input 
                    type="text" 
                    name="director"
                    placeholder="ejemplo: Christopher Nolan"
                    required
                    />
                </label>
                
                <div className={styles.row}> 
                    <label>
                    Año: 
                    <input 
                    type="text" 
                    name="anio"
                    placeholder="ejemplo: 2011"
                    required
                    />
                    </label>
                    <label>
                        Puntaje (1-10):  
                        <input 
                        type="number" 
                        name="puntaje"
                        min="1"
                        max="10"
                        placeholder="1-10"
                        required
                        />
                    </label>
                </div>

                <div className="styles.row">
                    <label>
                     Genero: 
                        <select name="genero" required>
                            <option value="accion">Acción</option>
                            <option value="comedia">Comedia</option>
                            <option value="drama">Drama</option>
                            <option value="fantasia">Fantasía</option>
                            <option value="terror">Terror</option>
                        </select>
                    </label>
                </div>
                

                <Boton texto="Guardar" clase="btn-guardar"  />
            </form>
        </div>
    )
}

export default Formulario;
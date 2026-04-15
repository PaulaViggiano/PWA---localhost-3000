import styles from './Item.module.css';
import Boton from '../Boton/Boton.jsx';

const Item = ({item}) => {
    // Obtengo cada propiedad de Item(pelicula/serie) en variables individuales
    const{ Titulo, Director, Anio, Genero, Popularidad, Tipo, Vista, Imagen, Id } = item;
    // URL dinamica para imagen
    const url = `https://picsum.photos/seed/${Id}/1000/300`;


    return(
        <div className={styles.card}>
            <div className={styles.imagenContainer}>
                <img src={url} alt={`Poster de ${Titulo}`} className={styles.poster} />
            </div>

            <div className={styles.header}>
                <h4>{Titulo}</h4>
                <span className={styles.badge}>{Tipo}</span>
            </div>

            <div className={styles.info}>
                <p><strong>Director:</strong> {Director}</p>
                <p><strong>Año:</strong> {Anio}</p>
                <p><strong>Género:</strong> {Genero}</p>
                <p><strong>Rating:</strong> {Popularidad}</p>
            </div>

            <div className={styles.acciones}>
                <Boton />
            </div>
        </div>
    )
};

export default Item;
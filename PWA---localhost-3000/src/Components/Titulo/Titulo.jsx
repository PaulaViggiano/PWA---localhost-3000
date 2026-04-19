import styles from './Titulo.module.css'

function Titulo({texto}) {

  return <>
    <h1 className={styles.titulo}>{texto}</h1>
  </>
}

export default Titulo;
import styles from './ListGroup.module.css'

function ListGroup() {
  return (
    <>
      <ul className={styles['list-group']}>
        <li className={`${styles['list-group-item']} ${styles['container']}`}>An item</li>
        <li className={`${styles['list-group-item']} ${styles['container']}`}>A second item</li>
        <li className={`${styles['list-group-item']} ${styles['container']}`}>A third item</li>
        <li className={`${styles['list-group-item']} ${styles['container']}`}>A fourth item</li>
        <li className={`${styles['list-group-item']} ${styles['container']}`}>And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;

import styles from "./NoResultFound.module.scss";

export default function NoResultFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.icon}>&#128533;</div>
      <h2 className={styles.heading}>No Definitions Found</h2>
      <p className={styles.message}>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

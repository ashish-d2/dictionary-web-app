import styles from "./NoResultFound.module.scss";

type ComponentPropType = {
  title: string;
  message: string;
  theme: string;
};

const NoResultFound: React.FC<ComponentPropType> = function ({
  title,
  message,
  theme,
}) {
  console.log(theme);
  return (
    <div className={styles.notFound}>
      <div className={styles.icon}>&#128533;</div>
      <h2
        className={`${styles.heading} ${
          theme === "dark" ? styles.heading_dark : ""
        }`}
      >
        {title}
      </h2>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default NoResultFound;

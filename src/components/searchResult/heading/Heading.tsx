import styles from "./Heading.module.scss";

import PlayBtn from "../../buttons/playBtn/PlayBtn";

const Heading = function () {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.heading}>
        <h1 className={styles.mainHeading}>Keyboard</h1>
        <p className={styles.pronounce}>/ˈkiːbɔːd/</p>
      </div>

      <PlayBtn />
    </div>
  );
};

export default Heading;

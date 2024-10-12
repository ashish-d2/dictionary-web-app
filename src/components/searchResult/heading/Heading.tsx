import styles from "./Heading.module.scss";

import PlayBtn from "../../buttons/playBtn/PlayBtn";
import { useTheme } from "./../../../context/ThemeContext";

const Heading = function () {
  const { theme } = useTheme();

  return (
    <div className={styles.headingContainer}>
      <div className={styles.heading}>
        <h1
          className={`sansSerif ${
            theme === "light" ? "text-light" : "text-dark"
          } ${styles.mainHeading}`}
        >
          Keyboard
        </h1>
        <p className={`sansSerif highlight ${styles.pronounce}`}>/ˈkiːbɔːd/</p>
      </div>

      <PlayBtn />
    </div>
  );
};

export default Heading;

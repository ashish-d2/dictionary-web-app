import styles from "./Heading.module.scss";

import PlayBtn from "../../buttons/playBtn/PlayBtn";
import { useTheme } from "./../../../context/ThemeContext";
import { useSearchContext } from "../../../context/SearchContext";

const Heading = function () {
  const { theme } = useTheme();
  const { data } = useSearchContext();

  return (
    <div className={styles.headingContainer}>
      <div className={styles.heading}>
        <h1
          className={` ${theme === "light" ? "text-light" : "text-dark"} ${
            styles.mainHeading
          }`}
        >
          {data ? data.word : ""}
        </h1>
        <p className={` highlight ${styles.pronounce}`}>
          {data ? data.phonetic : ""}
        </p>
      </div>

      <PlayBtn />
    </div>
  );
};

export default Heading;

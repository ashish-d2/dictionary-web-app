import styles from "./Content.module.scss";
import { useTheme } from "../../../../context/ThemeContext";

// type import
import { Meanings } from "./../../../../context/SearchContext";

// context import
import { useSearchContext } from "./../../../../context/SearchContext";

type ComponentProps = {
  contentData: Meanings;
};

const Content: React.FC<ComponentProps> = function ({ contentData }) {
  const { theme } = useTheme();
  const { getData } = useSearchContext();

  return (
    <>
      <div className={styles.subHeading}>
        <h2
          className={`sansSerif ${
            theme === "light" ? "text-light" : "text-dark"
          }`}
        >
          {contentData.partOfSpeech}
        </h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.content_heading}>Meaning</h3>
        <ul
          className={`${theme === "light" ? "text-light" : "text-dark"} ${
            styles.list
          }`}
        >
          {contentData.definitions.map((definition, index) => (
            <li key={index} className={styles.list_data}>
              <p>{definition.definition}</p>
              {definition.example && (
                <p className={styles.example}>{definition.example}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {contentData.synonyms.length > 0 && (
        <div className={styles.footer}>
          <p className={styles.footer_heading}>Synonyms</p>

          <ul className={styles.synonyms_container}>
            {contentData.synonyms.map((word, index) => (
              <li
                key={index}
                className={styles.synonyms}
                onClick={() => getData(word)}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Content;

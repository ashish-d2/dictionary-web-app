import styles from "./Footer.module.scss";

import { ReactComponent as LinkIcon } from "./../../assets/images/icon-new-window.svg";

// context import
import { useTheme } from "../../context/ThemeContext";
import { useSearchContext } from "../../context/SearchContext";

const Footer = function () {
  const { theme } = useTheme();
  const { data } = useSearchContext();

  return (
    <div className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={`sansSerif ${styles.source_container}`}>
        <p className={styles.source}>Source</p>
        {data && (
          <a
            href={`https://en.wiktionary.org/wiki/${data.word}`}
            target="_blank"
            className={`${theme === "light" ? "text-light" : "text-dark"}`}
          >
            https://en.wiktionary.org/wiki/{data.word}
          </a>
        )}
        <LinkIcon className={styles.linkIcon} />
      </div>
    </div>
  );
};

export default Footer;

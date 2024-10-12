import styles from "./Footer.module.scss";

import { ReactComponent as LinkIcon } from "./../../assets/images/icon-new-window.svg";

import { useTheme } from "../../context/ThemeContext";

const Footer = function () {
  const { theme } = useTheme();

  return (
    <div className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={`sansSerif ${styles.source_container}`}>
        <p className={styles.source}>Source</p>
        <a
          href="#"
          className={`${theme === "light" ? "text-light" : "text-dark"}`}
        >
          https://en.wiktionary.org/wiki/keyboard
        </a>
        <LinkIcon className={styles.linkIcon} />
      </div>
    </div>
  );
};

export default Footer;

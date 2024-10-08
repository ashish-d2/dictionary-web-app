import styles from "./Footer.module.scss";

import { ReactComponent as LinkIcon } from "./../../assets/images/icon-new-window.svg";

const Footer = function () {
  return (
    <div className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={`sansSerif ${styles.source_container}`}>
        <p className={styles.source}>Source</p>
        <a href="#" className="light">
          https://en.wiktionary.org/wiki/keyboard
        </a>
        <LinkIcon />
      </div>
    </div>
  );
};

export default Footer;

import styles from "./Footer.module.scss";

const Footer = function () {
  return (
    <div className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={`sansSerif ${styles.source_container}`}>
        <p className={styles.source}>Source</p>
        <a href="#" className="light">
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </div>
    </div>
  );
};

export default Footer;

import styles from "./Content.module.scss";

const Content = function () {
  return (
    <>
      <div className={styles.subHeading}>
        <h2 className="sansSerif">noun</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.content_heading}>Meaning</h3>
        <ul className={`light ${styles.list}`}>
          <li className={styles.list_data}>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li className={styles.example}>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li className={styles.list_data}>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
      </div>

      <div className={styles.footer}>
        <p>Synonyms</p>
        <p>electronic keyboard</p>
      </div>
    </>
  );
};

export default Content;

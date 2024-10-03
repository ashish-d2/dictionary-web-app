import { useRef } from "react";

import styles from "./FontSelector.module.scss";

import { ReactComponent as ArrowLogo } from "./../../../assets/images/icon-arrow-down.svg";

const FontSelector = function () {
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleArrowBtnClick = function () {
    if (selectRef.current) {
      selectRef.current.focus();
      //   selectRef.current.click();
    }
  };

  return (
    <div className={styles.fontSelector_wrapper}>
      <select
        className={`${styles.fontSelector} ${styles.fontSelector_sansSerif} ${styles.fontSelector_lt}`}
        ref={selectRef}
      >
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="mono">Mono</option>
      </select>

      <div className={styles.arrowBtn} onClick={handleArrowBtnClick}>
        <ArrowLogo />
      </div>
    </div>
  );
};

export default FontSelector;

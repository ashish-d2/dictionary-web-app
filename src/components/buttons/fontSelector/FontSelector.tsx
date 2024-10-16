import styles from "./FontSelector.module.scss";

import { ReactComponent as ArrowLogo } from "./../../../assets/images/icon-arrow-down.svg";

const FontSelector = function () {
  return (
    <div className={`${styles.fontSelector} text-light`}>
      <p>Sans Serif</p>
      <div className={`${styles.fonts}`}>
        <p className="sans-Serif">Sans Serif</p>
        <p className="serif">Serif</p>
        <p className="mono">Mono</p>
      </div>
      <ArrowLogo />
    </div>
  );
};

export default FontSelector;

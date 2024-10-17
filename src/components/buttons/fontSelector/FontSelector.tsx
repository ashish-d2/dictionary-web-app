import styles from "./FontSelector.module.scss";

import { useTheme } from "../../../context/ThemeContext";

import { ReactComponent as ArrowLogo } from "./../../../assets/images/icon-arrow-down.svg";

const FontSelector = function () {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.fontSelector} ${
        theme === "light" ? "text-light" : "text-dark"
      }`}
    >
      <p>Sans Serif</p>
      <div
        className={`${styles.fonts} ${
          theme === "light" ? styles.font_light : styles.font_dark
        }`}
      >
        <p className="sans-Serif">Sans Serif</p>
        <p className="serif">Serif</p>
        <p className="mono">Mono</p>
      </div>
      <ArrowLogo />
    </div>
  );
};

export default FontSelector;

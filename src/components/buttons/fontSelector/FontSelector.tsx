import styles from "./FontSelector.module.scss";
import { useState } from "react";

import { useTheme } from "../../../context/ThemeContext";

import { ReactComponent as ArrowLogo } from "./../../../assets/images/icon-arrow-down.svg";

const FontSelector = function () {
  const { theme } = useTheme();
  const [displayFonts, setDisplayFonts] = useState<boolean>(false);

  const handleDisplayFonts = function () {
    setDisplayFonts((prevValue) => !prevValue);
  };

  return (
    <div
      className={`${styles.fontSelector_container} ${
        theme === "light" ? "text-light" : "text-dark"
      }`}
    >
      <div className={`${styles.fontSelector}`} onClick={handleDisplayFonts}>
        <p>Sans Serif</p>

        <ArrowLogo />
      </div>

      <div
        className={`${styles.fonts} ${
          theme === "light" ? styles.font_light : styles.font_dark
        } ${displayFonts ? styles.active : ""}`}
      >
        <p className="sans-Serif">Sans Serif</p>
        <p className="serif">Serif</p>
        <p className="mono">Mono</p>
      </div>
    </div>
  );
};

export default FontSelector;

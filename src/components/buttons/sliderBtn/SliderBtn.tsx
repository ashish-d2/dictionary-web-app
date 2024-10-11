import { useTheme } from "./../../../context/ThemeContext";

import styles from "./SliderBtn.module.scss";

import { useState } from "react";

const SliderBtn = function () {
  const { toggleTheme } = useTheme();
  const [sliderActive, setSliderActive] = useState(false);

  const handleSliderClick = function () {
    toggleTheme();
    setSliderActive(!sliderActive);
  };

  return (
    <button
      className={`${styles.sliderContainer} ${
        sliderActive ? styles.sliderContainer_dt : styles.sliderContainer_lt
      }`}
      onClick={handleSliderClick}
    >
      <span
        className={`${styles.slider} ${
          sliderActive ? styles.slider_active : ""
        } ${styles.slider_lt}`}
      ></span>
    </button>
  );
};

export default SliderBtn;

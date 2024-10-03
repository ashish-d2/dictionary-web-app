import styles from "./SliderBtn.module.scss";

import { useState } from "react";

const SliderBtn = function () {
  const [sliderActive, setSliderActive] = useState(false);

  const handleSliderClick = function () {
    setSliderActive(!sliderActive);
  };

  return (
    <button
      className={`${styles.sliderContainer} ${styles.sliderContainer_lt}`}
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

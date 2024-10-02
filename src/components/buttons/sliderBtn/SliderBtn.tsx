import styles from "./SliderBtn.module.scss";

const SliderBtn = function () {
  return (
    <button
      className={`${styles.sliderContainer} ${styles.sliderContainer_lt}`}
    >
      <span className={`${styles.slider} ${styles.slider_lt}`}></span>
    </button>
  );
};

export default SliderBtn;

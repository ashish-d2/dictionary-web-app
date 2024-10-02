import styles from "./Header.module.scss";

// logo imports
import { ReactComponent as MainLogo } from "./../../assets/images/logo.svg";
import { ReactComponent as ArrowLogo } from "./../../assets/images/icon-arrow-down.svg";
import { ReactComponent as MoonLogo } from "./../../assets/images/icon-moon.svg";

// Component imports
import SliderBtn from "../buttons/sliderBtn/SliderBtn";

const Header = function () {
  return (
    <header>
      <MainLogo />

      <div className={styles.headerRight}>
        <button className={styles.fontSelector}>
          <span
            className={`${styles.fontName} ${styles.fontName_light} ${styles.fontName_sans}`}
          >
            Sans Serif
          </span>
          <ArrowLogo />
        </button>

        <div className={styles.divider}></div>
        <div>
          <SliderBtn />
          <MoonLogo />
        </div>
      </div>
    </header>
  );
};

export default Header;

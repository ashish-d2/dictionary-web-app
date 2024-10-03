import styles from "./Header.module.scss";

// logo imports
import { ReactComponent as MainLogo } from "./../../assets/images/logo.svg";
import { ReactComponent as MoonLogo } from "./../../assets/images/icon-moon.svg";

// Component imports
import SliderBtn from "../buttons/sliderBtn/SliderBtn";
import FontSelector from "../buttons/fontSelector/FontSelector";

const Header = function () {
  return (
    <header>
      <MainLogo height="32px" width="28.05px" />

      <div className={styles.headerRight}>
        <FontSelector />

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

import styles from "./FontSelector.module.scss";
import { useState, useRef, useEffect } from "react";

import { useTheme } from "../../../context/ThemeContext";

import { ReactComponent as ArrowLogo } from "./../../../assets/images/icon-arrow-down.svg";

// Context import
import { useFontContext } from "../../../context/FontContext";

const FontSelector = function () {
  const { theme } = useTheme();
  const [displayDropDown, setDisplayDropDown] = useState<boolean>(false);
  const { updateCurrentFont } = useFontContext();

  // ref for fontselector dialogbox
  const fontSelector = useRef<HTMLDivElement>(null);
  // ref for fontselector btn
  const fontSelectorBtn = useRef<HTMLDivElement>(null);

  const handleDropDown = function () {
    setDisplayDropDown((prevValue) => !prevValue);
  };

  // checking where the click event is occuring
  useEffect(() => {
    const handleClickEvent = function (event: MouseEvent) {
      if (
        fontSelector.current &&
        fontSelector.current.contains(event.target as Node)
      ) {
      } else {
        console.log("outside dialog box");
        // disable font-selector dropdown
        // 1st check if click is happening of font selector btn. If click is happeing on fontSelector btn than the dialog box will not hide because setDisplayDropDown will turn 'false' here and onClick event will turn that back to 'true'
        if (
          fontSelectorBtn.current &&
          !fontSelectorBtn.current.contains(event.target as Node)
        ) {
          setDisplayDropDown(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickEvent);

    return () => {
      document.removeEventListener("mousedown", handleClickEvent);
    };
  }, []);

  const handleFont = function (event: React.MouseEvent<HTMLDivElement>) {
    // function to find which font is clicked (which p tag has been clicked)
    const target = event.target as HTMLElement;

    updateCurrentFont(target.className);
  };

  return (
    <div
      className={`${styles.fontSelector_container} ${
        theme === "light" ? "text-light" : "text-dark"
      }`}
    >
      <div
        ref={fontSelectorBtn}
        className={`${styles.fontSelector}`}
        onClick={handleDropDown}
      >
        <p>Sans Serif</p>

        <ArrowLogo />
      </div>

      <div
        ref={fontSelector}
        className={`${styles.fonts} ${
          theme === "light" ? styles.font_light : styles.font_dark
        } ${displayDropDown ? styles.active : ""}`}
        onClick={handleFont}
      >
        <p className="sans-Serif">Sans Serif</p>
        <p className="serif">Serif</p>
        <p className="mono">Mono</p>
      </div>
    </div>
  );
};

export default FontSelector;

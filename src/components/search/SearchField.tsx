import styles from "./SearchField.module.scss";

import { useState } from "react";
import { useTheme } from "./../../context/ThemeContext";

import { ReactComponent as SearchBtn } from "./../../assets/images/icon-search.svg";

export default function SearchField() {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div
        className={`${styles.search} ${
          theme === "dark" ? styles.search_dt : ""
        } ${isFocused ? styles.focused : ""}`}
      >
        <input
          type="text"
          placeholder="Search for any word..."
          className={`${styles.searchField} ${
            theme === "light" ? "text-light" : "text-dark"
          } ${
            theme === "light" ? styles.searchField_lt : styles.searchField_dt
          } sansSerif`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button className={`${styles.searchBtn}`}>
          <SearchBtn />
        </button>
      </div>

      {/* <span className={styles.errorMessage}>Whoops, can’t be empty…</span> */}
    </>
  );
}

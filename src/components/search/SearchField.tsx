import styles from "./SearchField.module.scss";

import { useState, useRef } from "react";
import { useTheme } from "./../../context/ThemeContext";
import { useSearchContext } from "../../context/SearchContext";

import { ReactComponent as SearchBtn } from "./../../assets/images/icon-search.svg";

export default function SearchField() {
  const { theme } = useTheme();
  const { getData } = useSearchContext();
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchBtnClick = function () {
    if (!inputRef.current) return;
    if (inputRef.current.value === "") return;

    getData(inputRef.current.value);
  };

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
          ref={inputRef}
        />
        <button
          className={`${styles.searchBtn}`}
          onClick={() => handleSearchBtnClick()}
        >
          <SearchBtn />
        </button>
      </div>

      {/* <span className={styles.errorMessage}>Whoops, can’t be empty…</span> */}
    </>
  );
}

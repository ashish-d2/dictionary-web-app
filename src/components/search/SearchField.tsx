import styles from "./SearchField.module.scss";

import { useState, useRef } from "react";
import { useTheme } from "./../../context/ThemeContext";
import { useSearchContext } from "../../context/SearchContext";

import { ReactComponent as SearchBtn } from "./../../assets/images/icon-search.svg";

export default function SearchField() {
  const { theme } = useTheme();
  const { getData } = useSearchContext();
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  // search field ref
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearchBtnClick = function () {
    // function to get input form searchField and display error message when searchField is empty
    if (!inputRef.current) return;

    // checking if user entered value is empty. If empty then updating isEmpty state
    if (inputRef.current.value === "") {
      setIsEmpty(true);
      return;
    }

    // if user enterd some valid value and if isEmpty state is true then setting it back to false
    if (isEmpty) setIsEmpty(false);

    getData(inputRef.current.value);
  };

  const handleKeyPress = function (
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    // called when user uses keyboard "enter key" for submitting form
    if (event.key !== "Enter") return;

    if (!inputRef.current) return;

    // checking if user entered value is empty. If empty then updating isEmpty state
    if (inputRef.current.value === "") {
      setIsEmpty(true);
      return;
    }

    // if user enterd some valid value and if isEmpty state is true then setting it back to false
    if (isEmpty) setIsEmpty(false);

    getData(inputRef.current.value);
  };

  return (
    <>
      <div
        className={`${styles.search} ${
          theme === "dark" ? styles.search_dt : ""
        } ${isFocused ? styles.focused : ""} ${isEmpty ? styles.error : ""}`}
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
          onKeyDown={(e) => handleKeyPress(e)}
          ref={inputRef}
        />
        <button
          className={`${styles.searchBtn}`}
          onClick={() => handleSearchBtnClick()}
        >
          <SearchBtn />
        </button>
      </div>

      {isEmpty ? (
        <span className={styles.errorMessage}>Whoops, can’t be empty…</span>
      ) : (
        ""
      )}
    </>
  );
}

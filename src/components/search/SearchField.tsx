import styles from "./SearchField.module.scss";

import { useState } from "react";

import { ReactComponent as SearchBtn } from "./../../assets/images/icon-search.svg";

export default function SearchField() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`${styles.search} ${styles.search_lt} ${
        isFocused ? styles.focused : ""
      }`}
    >
      <input
        type="text"
        placeholder="Search for any word..."
        className={`${styles.searchField} sansSerif light`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className={`${styles.searchBtn}`}>
        <SearchBtn />
      </button>
    </div>
  );
}

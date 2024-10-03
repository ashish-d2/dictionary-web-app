import styles from "./SearchField.module.scss";

import { ReactComponent as SearchBtn } from "./../../assets/images/icon-search.svg";

export default function SearchField() {
  return (
    <div className={`${styles.search} ${styles.search_lt}`}>
      <input
        type="text"
        placeholder="Search for any word..."
        className={`${styles.searchField} sansSerif light`}
      />
      <button className={`${styles.searchBtn}`}>
        <SearchBtn />
      </button>
    </div>
  );
}

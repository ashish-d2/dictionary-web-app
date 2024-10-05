import styles from "./SearchResult.module.css";

import { ReactNode } from "react";

interface SearchResultProps {
  children: ReactNode;
}

const SearchResult: React.FC<SearchResultProps> = function ({ children }) {
  return <div className={styles.searchResult}>{children}</div>;
};

export default SearchResult;

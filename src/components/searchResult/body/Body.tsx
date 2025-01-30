import styles from "./Body.module.scss";

import Content from "./content/Content";

// context
import { useSearchContext } from "../../../context/SearchContext";

const Body = function () {
  const { data } = useSearchContext();

  return (
    <div className={`sansSerif ${styles.body}`}>
      {data
        ? data.meanings.map((meaning, index) => (
            <Content contentData={meaning} key={index} />
          ))
        : ""}
    </div>
  );
};

export default Body;

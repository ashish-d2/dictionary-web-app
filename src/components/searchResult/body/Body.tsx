import styles from "./Body.module.scss";

import Content from "./content/Content";

const Body = function () {
  return (
    <div className={`sansSerif ${styles.body}`}>
      <Content />
    </div>
  );
};

export default Body;

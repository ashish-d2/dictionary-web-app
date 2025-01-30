import styles from "./DefaultPage.module.scss";

type ComponentPropType = {
  theme: string;
};

const DefaultPage: React.FC<ComponentPropType> = function ({ theme }) {
  return (
    <div
      className={`${styles.default} ${
        theme === "dark" ? styles.default_dark : ""
      }`}
    >
      <p>Free to use Dictionary App made with React. 🌟</p>
    </div>
  );
};

export default DefaultPage;

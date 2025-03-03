import styles from "./Loading.module.scss";

type componentsProps = {
  theme: string;
};

const Loading: React.FC<componentsProps> = function ({ theme }) {
  return (
    <div
      className={`${theme === "dark" ? styles.loading_dark : ""} ${
        styles.loading
      }`}
    >
      <p>Loading...</p>
    </div>
  );
};

export default Loading;

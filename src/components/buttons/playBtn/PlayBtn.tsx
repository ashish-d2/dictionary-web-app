import styles from "./PlayBtn.module.scss";

const PlayBtn = function () {
  return (
    <button className={styles.playBtn}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 75 75"
      >
        <g fill="#A445ED" fillRule="evenodd">
          <circle
            cx="37.5"
            cy="37.5"
            r="37.5"
            opacity=".25"
            className={styles.circle}
          />
          <path d="M29 27v21l21-10.5z" className={styles.playIcon} />
        </g>
      </svg>
    </button>
  );
};

export default PlayBtn;

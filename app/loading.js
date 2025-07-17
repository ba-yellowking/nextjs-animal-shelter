import styles from "./page.module.css";

export default function AnimalsLoadingPage() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>
        Fetching information
        <span className={styles.dots}>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </p>
    </div>
  );
}

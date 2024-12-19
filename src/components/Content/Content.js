import styles from "./index.module.css";

function Content(props) {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </main>
  );
}

export default Content;

import styles from "./index.module.css";

function Social(props) {
  return (
    <a className={styles.social} href={props.link}>
      <img src={props.icon} alt="" />
    </a>
  );
}

export default Social;

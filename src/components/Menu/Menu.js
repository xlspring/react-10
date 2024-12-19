import styles from "./index.module.css";

import MenuItem from "../MenuItem";

export default function Menu(props) {
  return (
    <ul className={props.view === "horizontal" ? styles.horizontal : styles.vertical}>
      {props.list.map((x, i) => (
        <MenuItem
          text={x.text}
          url={x.url}
          target={"_self"}
          key={i}
        />
      ))}
    </ul>
  );
}

import React from "react";
import { connect } from "react-redux";
import styles from "./index.module.css";
import Menu from "../Menu/Menu";

function Footer(props) {
  const { menuItems, name } = props;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <h3>{name}</h3>
        <Menu view={"horizontal"} list={menuItems} />
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => ({
  menuItems: state.menu,
});

export default connect(mapStateToProps)(Footer);

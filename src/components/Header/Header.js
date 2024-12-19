import Logo from "../Logo/Logo";
import DateTime from "../DateTime/DateTime";
import Menu from "../Menu/Menu";
import {connect} from "react-redux";
import styles from "./index.module.css";

function Header(props) {
  const { logo, menuItems } = props;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo image={logo} />
        <DateTime />
      </div>
      <Menu view={"horizontal"} list={menuItems} />
    </header>
  );
}

const mapStateToProps = (state) => ({
  logo: state.logo,
  menuItems: state.menu,
});

export default connect(mapStateToProps)(Header);

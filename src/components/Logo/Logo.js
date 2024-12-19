import styles from "./index.module.css";

export default function Logo(props) {

	return (
		<a className={styles.logoWrapper} href={"/"}>
			<img className={styles.img} src={props.image} alt="Logo"/>
		</a>
	)
}
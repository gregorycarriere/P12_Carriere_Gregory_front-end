import styles from "./Aside.module.css";

function Aside(props) {
	return (
		<div className={styles.container}>
			<img src={props.icon} alt={props.alt}></img>
			<div className={styles.info}>
				<h2 className={styles.title}>
					{props.quantity}
					{props.unity}
				</h2>
				<p className={styles.p}>{props.info}</p>
			</div>
		</div>
	);
}

export default Aside;

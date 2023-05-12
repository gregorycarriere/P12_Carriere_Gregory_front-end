import styles from "./Title.module.css";

function Title(props) {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>
				Bonjour <span className={styles.user_name}>{props.name}</span>
			</h1>
			<p className={styles.text}>
				Félicitation ! Vous avez explosé vos objectifs hier 👏
			</p>
		</div>
	);
}

export default Title;

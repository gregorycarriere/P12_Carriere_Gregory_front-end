import styles from "./Profil.module.css";
import Title from "../components/Title/Title";

function Profil() {
	return (
		<>
			<Title />
			<div className={styles.first_container}>
				<div className={styles.second_container}>
					<div className={styles.a}>1</div>
					<div className={styles.fourth_container}>
						<div className={styles.b}>2</div>
						<div className={styles.c}>3</div>
						<div className={styles.d}>4</div>
					</div>
				</div>
				<div className={styles.third_container}>
					<div className={styles.e}>5</div>
					<div className={styles.f}>6</div>
					<div className={styles.g}>7</div>
					<div className={styles.h}>8</div>
				</div>
			</div>
		</>
	);
}

export default Profil;

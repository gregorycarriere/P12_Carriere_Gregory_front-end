import styles from "./Profil.module.css";
import Title from "../components/Title/Title";
import {
	USER_MAIN_DATA,
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_PERFORMANCE,
} from "../data/data";
import { useParams } from "react-router";
import Aside from "../components/Aside/Aside";
import calories_icon from "../img/calories-icon.svg";
import carbs_icon from "../img/carbs-icon.svg";
import fat_icon from "../img/fat-icon.svg";
import protein_icon from "../img/protein-icon.svg";

function Profil() {
	const params = useParams();

	const main = USER_MAIN_DATA.find((el) => el.id == params.id);

	return (
		<>
			<Title name={main.userInfos.firstName} />
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
					<div className={styles.e}>
						<Aside
							icon={calories_icon}
							alt="calories icon"
							quantity={main.keyData.calorieCount}
							unity="Kcal"
							info="Calories"
						/>
					</div>
					<div className={styles.f}></div>
					<div className={styles.g}></div>
					<div className={styles.h}></div>
				</div>
			</div>
		</>
	);
}

export default Profil;

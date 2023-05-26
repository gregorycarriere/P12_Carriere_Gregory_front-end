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
import RadarGraph from "../components/RadarGraph/RadarGraph";
import ScoreChart from "../components/ScoreChart/ScoreChart";

function Profil() {
	const params = useParams();

	const main = USER_MAIN_DATA.find((el) => el.id == params.id);
	const perf = USER_PERFORMANCE.find((el) => el.userId == params.id);

	return (
		<>
			<Title name={main.userInfos.firstName} />
			<div className={styles.first_container}>
				<div className={styles.second_container}>
					<div className={styles.a}>1</div>
					<div className={styles.fourth_container}>
						<div>2</div>
						<div className={styles.radar}>
							<RadarGraph perf={perf} />
						</div>
						<div className={styles.score}>
							<ScoreChart score={main} />
						</div>
					</div>
				</div>
				<div className={styles.third_container}>
					<div>
						<Aside
							icon={calories_icon}
							alt="calories icon"
							quantity={main.keyData.calorieCount}
							unity="Kcal"
							info="Calories"
						/>
					</div>
					<div>
						<Aside
							icon={protein_icon}
							alt="Proteines icon"
							quantity={main.keyData.proteinCount}
							unity="g"
							info="Proteines"
						/>
					</div>
					<div>
						<Aside
							icon={carbs_icon}
							alt="Glucides icon"
							quantity={main.keyData.carbohydrateCount}
							unity="g"
							info="Glucides"
						/>
					</div>
					<div>
						<Aside
							icon={fat_icon}
							alt="Lipides icon"
							quantity={main.keyData.lipidCount}
							unity="g"
							info="Lipides"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profil;

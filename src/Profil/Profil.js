import styles from "./Profil.module.css";
import Title from "../components/Title/Title";
import { useParams } from "react-router";
import Aside from "../components/Aside/Aside";
import calories_icon from "../img/calories-icon.svg";
import carbs_icon from "../img/carbs-icon.svg";
import fat_icon from "../img/fat-icon.svg";
import protein_icon from "../img/protein-icon.svg";
import RadarGraph from "../components/RadarGraph/RadarGraph";
import ScoreChart from "../components/ScoreChart/ScoreChart";
import SessionTime from "../components/SessionTime/SessionTime";
import Switchuser from "../components/Switchuser/Switchuser";
import BarGraph from "../components/BarGraph/BarGraph";
import { useEffect, useState } from "react";
import { getData } from "../service/getData";

// render profil page
function Profil() {
	const [data, setData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const data = async () => {
			const request = await getData("USER_MAIN_DATA", id);
			if (!request) return alert("data error : main infos");
			setData(request.data);
		};
		data();
	}, [id]);
	if (data.length === 0) return null;

	return (
		<>
			<div className={styles.header}>
				<Title name={data.userInfos.firstName} />
				<Switchuser user={id} />
			</div>
			<div className={styles.first_container}>
				<div className={styles.second_container}>
					<div className={styles.a}>
						<BarGraph />
					</div>
					<div className={styles.fourth_container}>
						<div>
							<SessionTime />
						</div>
						<div className={styles.radar}>
							<RadarGraph />
						</div>
						<div className={styles.score}>
							<ScoreChart data={data} />
						</div>
					</div>
				</div>
				<div className={styles.third_container}>
					<div>
						<Aside
							icon={calories_icon}
							alt="calories icon"
							quantity={data.keyData.calorieCount}
							unity="Kcal"
							info="Calories"
						/>
					</div>
					<div>
						<Aside
							icon={protein_icon}
							alt="Proteines icon"
							quantity={data.keyData.proteinCount}
							unity="g"
							info="Proteines"
						/>
					</div>
					<div>
						<Aside
							icon={carbs_icon}
							alt="Glucides icon"
							quantity={data.keyData.carbohydrateCount}
							unity="g"
							info="Glucides"
						/>
					</div>
					<div>
						<Aside
							icon={fat_icon}
							alt="Lipides icon"
							quantity={data.keyData.lipidCount}
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

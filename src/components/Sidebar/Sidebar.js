import styles from "./Sidebar.module.css";
import meditatingIcon from "../../img/meditating_icon.svg";
import swimmingIcon from "../../img/swimming_icon.svg";
import bicyclingIcon from "../../img/bicycling_icon.svg";
import dumbbellIcon from "../../img/dumbbell_icon.svg";

function Sidebar() {
	return (
		<aside>
			<img
				src={meditatingIcon}
				alt="meditate icon"
				className={styles.icon}
			/>
			<img
				src={swimmingIcon}
				alt="swimming icon"
				className={styles.icon}
			/>
			<img
				src={bicyclingIcon}
				alt="bicycle icon"
				className={styles.icon}
			/>
			<img
				src={dumbbellIcon}
				alt="dumbbell icon"
				className={styles.icon}
			/>
			<span>Copiryght, SportSee 2020</span>
		</aside>
	);
}

export default Sidebar;

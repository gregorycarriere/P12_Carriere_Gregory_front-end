import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

// render navbar links
function Navbar() {
	return (
		<nav>
			<NavLink to="#" end className={styles.link}>
				Accueil
			</NavLink>
			<NavLink to="user/12" end className={styles.link}>
				Profil
			</NavLink>
			<NavLink to="#" end className={styles.link}>
				Réglage
			</NavLink>
			<NavLink to="#" end className={styles.link}>
				Communauté
			</NavLink>
		</nav>
	);
}

export default Navbar;

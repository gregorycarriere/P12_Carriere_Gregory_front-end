import sportseeLogo from "../../img/logo.svg";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

// render header box + navbar
function Header() {
	return (
		<header>
			<img
				src={sportseeLogo}
				className={styles.logo}
				alt="SportSee logo"
			/>
			<Navbar />
		</header>
	);
}

export default Header;

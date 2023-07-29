import styles from "./Switchuser.module.css";
import { Link } from "react-router-dom";
import userIcon from "../../img/user-pen-solid.svg";

// render switch user button
function Switchuser({ user }) {
	return (
		<div className={styles.switch}>
			{user == 12 ? (
				<Link to="../user/18">
					<img
						src={userIcon}
						alt="user swap"
						className={styles.icon}
					/>
				</Link>
			) : (
				<Link to="../user/12">
					<img
						src={userIcon}
						alt="user swap"
						className={styles.icon}
					/>
				</Link>
			)}
		</div>
	);
}

export default Switchuser;

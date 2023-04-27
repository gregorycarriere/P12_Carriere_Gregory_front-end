import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function Root() {
	return (
		<>
			<Header />
			<div id="content">
				<Sidebar />
				<div id="detail">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Root;

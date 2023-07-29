import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "./Profil/Profil";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div id="content">
				<Sidebar />
				<div id="detail">
					<Routes>
						<Route path="/user/:id" element={<Profil />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

import {
	// Route,
	RouterProvider,
	createBrowserRouter,
	// createRoutesFromElements,
} from "react-router-dom";
import Profil from "./Profil/Profil";
import Root from "./Root";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		// errorElement: <ErrorPage />,
		children: [
			{
				path: "user/:id",
				element: <Profil />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

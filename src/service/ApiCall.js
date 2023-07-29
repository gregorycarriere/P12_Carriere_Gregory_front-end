// Retrieve user infos
export const getUserInfos = async (id) => {
	try {
		const res = await fetch(`http://localhost:3001/user/${id}`);
		return res.json();
	} catch (e) {
		console.log(e);
	}
};

// Retrieve user activity
export const getUserActivity = async (id) => {
	try {
		const res = await fetch(`http://localhost:3001/user/${id}/activity`);
		return res.json();
	} catch (e) {
		console.log(e);
	}
};

// Retrieve user perfomance
export const getUserPerformance = async (id) => {
	try {
		const res = await fetch(`http://localhost:3001/user/${id}/performance`);
		return res.json();
	} catch (e) {
		console.log(e);
	}
};

// Retrieve user average sessions
export const getUserAverageSessions = async (id) => {
	try {
		const res = await fetch(
			`http://localhost:3001/user/${id}/average-sessions`
		);
		return res.json();
	} catch (e) {
		console.log(e);
	}
};

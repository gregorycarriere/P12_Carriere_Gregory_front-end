/* eslint-disable default-case */

// comment or uncomment for type of import you want to use
// import {
// 	getUserActivity,
// 	getUserAverageSessions,
// 	getUserInfos,
// 	getUserPerformance,
// } from "./ApiCall";

import {
	getUserActivity,
	getUserAverageSessions,
	getUserInfos,
	getUserPerformance,
} from "../data/DataMocked";

// access to either mocked data or API data
export const getData = (type, id) => {
	let data = [];

	switch (type) {
		case "USER_ACTIVITY":
			data = getUserActivity(id);
			break;
		case "USER_PERFORMANCE":
			data = getUserPerformance(id);
			break;
		case "USER_AVERAGE_SESSIONS":
			data = getUserAverageSessions(id);
			break;
		case "USER_MAIN_DATA":
			data = getUserInfos(id);
			break;
	}
	return data;
};

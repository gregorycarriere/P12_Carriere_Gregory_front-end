export default class ModelisationClass {
	FormatDay(data) {
		data.sessions.map(function (obj) {
			switch (obj.day) {
				case 1:
					obj.day = "L";
					break;

				case 2:
					obj.day = "M";
					break;

				case 3:
					obj.day = "M";
					break;

				case 4:
					obj.day = "J";
					break;

				case 5:
					obj.day = "V";
					break;

				case 6:
					obj.day = "S";
					break;

				case 7:
					obj.day = "D";
					break;

				default:
					return obj.day;
			}

			return obj;
		});
	}

	FormatKind(data) {
		data.data.map(function (obj) {
			switch (obj.kind) {
				case 1:
					obj.kind = "Cardio";
					break;

				case 2:
					obj.kind = "Energie";
					break;

				case 3:
					obj.kind = "Endurance";
					break;

				case 4:
					obj.kind = "Force";
					break;

				case 5:
					obj.kind = "Vitesse";
					break;

				case 6:
					obj.kind = "Intensité";
					break;

				default:
					return obj.kind;
			}

			return obj;
		});
	}

	FormatDate(data) {
		for (let i = 0; i < data.sessions.length; i++) {
			data.sessions[i].day = i + 1;
		}
		return this;
	}
}

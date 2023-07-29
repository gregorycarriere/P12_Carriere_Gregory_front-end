import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
} from "recharts";
import { getData } from "../../service/getData";

// Render a RadarChart with user performance data
function RadarGraph() {
	const [data, setData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const data = async () => {
			const request = await getData("USER_PERFORMANCE", id);
			if (!request) return alert("data error : Radar");
			setData(request.data);
		};
		data();
	}, [id]);
	if (data.length === 0) return null;

	// format data.kind
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

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart outerRadius="70%" data={data.data}>
				<PolarGrid />
				<PolarAngleAxis
					stroke="white"
					tickLine={false}
					axisLine={false}
					tick={{ fontSize: 9 }}
					dataKey="kind"
				/>
				<Radar
					dataKey="value"
					stroke="#FF0101"
					fill="#FF0101"
					fillOpacity={0.7}
				/>
			</RadarChart>
		</ResponsiveContainer>
	);
}

export default RadarGraph;

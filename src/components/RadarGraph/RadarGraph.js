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
import ModelisationClass from "../../model/ModelisationClass";

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

	// format data.kind for RadarChart
	new ModelisationClass().FormatKind(data);

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

import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
} from "recharts";

function RadarGraph({ perf }) {
	perf.data.map(function (obj) {
		// eslint-disable-next-line default-case
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
		}

		return obj;
	});

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadarChart outerRadius="70%" data={perf.data}>
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

import {
	ResponsiveContainer,
	RadialBarChart,
	PolarAngleAxis,
	RadialBar,
	Legend,
} from "recharts";

function ScoreChart({ score }) {
	let perc = `${score.todayScore}` * 100;

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadialBarChart
				cx="50%"
				cy="50%"
				innerRadius="10%"
				outerRadius="80%"
				barSize={10}
				data={score}>
				<RadialBar
					minAngle={15}
					label={{ position: "insideStart", fill: "#fff" }}
					background
					clockWise
					dataKey="todayScore"
				/>
			</RadialBarChart>
		</ResponsiveContainer>
	);
}

export default ScoreChart;

import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";
import Title from "../Title/Title";

function ScoreChart({ score }) {
	let perc = 0;
	if (score.todayScore === undefined) {
		perc = `${score.score}` * 100;
	} else {
		perc = `${score.todayScore}` * 100;
	}

	const data = [
		{
			name: "progress",
			value: perc,
		},
		{
			name: "empty",
			value: 100 - perc,
		},
	];

	const COLORS = ["red", "transparent"];

	const CustomLabel = ({ viewBox, percent = 0 }) => {
		const { cx, cy } = viewBox;
		return (
			<>
				<text x={cx - 25} y={cy - 5}>
					<tspan
						style={{
							fontWeight: 700,
							fontSize: "26px",
							fill: "#282D30",
						}}>
						{percent}%
					</tspan>
				</text>
				<text x={cx - 50} y={cy + 15}>
					<tspan
						style={{
							fontSize: "14px",
							fill: "#74798C",
						}}>
						de votre objectif
					</tspan>
				</text>
			</>
		);
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart width="100%" height="100%" title="Score">
				<Pie
					data={data}
					innerRadius={70}
					outerRadius={80}
					cornerRadius={40}
					startAngle={90}
					endAngle={450}
					dataKey="value">
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
					<Label dy={-165} dx={-80} fill="#20253A" fontSize={"15px"}>
						Score
					</Label>
					<Label content={<CustomLabel percent={data[0].value} />} />
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}

export default ScoreChart;

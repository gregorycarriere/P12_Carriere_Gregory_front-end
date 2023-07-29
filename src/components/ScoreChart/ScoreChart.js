import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";
import { getData } from "../../data/getData";

function ScoreChart() {
	const [data, setData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const data = async () => {
			const request = await getData("USER_MAIN_DATA", id);
			if (!request) return alert("data error : main infos");
			setData(request.data);
		};
		data();
	}, [id]);
	if (data.length === 0) return null;

	let perc = 0;
	if (data.todayScore === undefined) {
		perc = `${data.score}` * 100;
	} else {
		perc = `${data.todayScore}` * 100;
	}

	const pourcent = [
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
					data={pourcent}
					innerRadius={70}
					outerRadius={80}
					cornerRadius={40}
					startAngle={90}
					endAngle={450}
					dataKey="value">
					{pourcent.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
					<Label dy={-165} dx={-80} fill="#20253A" fontSize={"15px"}>
						Score
					</Label>
					<Label
						content={<CustomLabel percent={pourcent[0].value} />}
					/>
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}

export default ScoreChart;

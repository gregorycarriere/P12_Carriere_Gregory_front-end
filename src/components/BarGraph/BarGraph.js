import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import styles from "./BarGraph.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../service/getData";
import ModelisationClass from "../../model/ModelisationClass";

// Render a BarChart with user activity Data

function BarGraph() {
	const [data, setData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const data = async () => {
			const request = await getData("USER_ACTIVITY", id);
			if (!request) return alert("data error : BarGraph");
			setData(request.data);
		};
		data();
	}, [id]);
	if (data.length === 0) return null;

	//format data.day
	new ModelisationClass().FormatDate(data);

	// create a customTooltip for barChart
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className={styles.customBox}>
					<p className={styles.label}>{`${payload[0].value}kg`}</p>
					<p className={styles.label}>{`${payload[1].value}kCal`}</p>
				</div>
			);
		}

		return null;
	};

	return (
		<>
			<p className={styles.title}>Activité quotidienne</p>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={data.sessions}
					barGap={8}
					margin={{
						top: 5,
						right: 10,
						left: 15,
						bottom: 0,
					}}>
					<CartesianGrid vertical={false} strokeDasharray="2" />
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						height={50}
						dy={12}
						stroke="#9B9EAC"
						fontSize={14}
					/>
					<YAxis
						yAxisId="right"
						orientation="right"
						stroke="#9B9EAC"
						domain={["dataMin - 1", "dataMax"]}
						tickCount={3}
						axisLine={false}
						tickLine={false}
						dx={20}
					/>
					<YAxis
						yAxisId="left"
						orientation="left"
						stroke="#E60000"
						hide={true}
					/>
					<Tooltip
						content={<CustomTooltip />}
						cursor={false}
						wrapperStyle={{
							background: "#E60000",
							borderRadius: "0",
							textAlign: "center",
							padding: "15px 5px",
							fontSize: "13px",
							color: "white",
						}}
					/>
					<Legend
						iconType="circle"
						iconSize={8}
						verticalAlign="top"
						align="right"
						height={70}
						wrapperStyle={{
							fontSize: "14px",
							marginTop: "10px",
						}}
					/>
					<Bar
						yAxisId="right"
						dataKey="kilogram"
						unit="kg"
						fill="#282D30"
						barSize={7}
						radius={[3, 3, 0, 0]}
						name="Poids(kg)"
					/>
					<Bar
						yAxisId="left"
						dataKey="calories"
						unit="kCal"
						fill="#E60000"
						barSize={7}
						radius={[3, 3, 0, 0]}
						name="Calories brûlées (kCal)"
					/>
				</BarChart>
			</ResponsiveContainer>
		</>
	);
}

export default BarGraph;

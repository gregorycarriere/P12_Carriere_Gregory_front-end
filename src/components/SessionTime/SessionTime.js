import {
	LineChart,
	Line,
	XAxis,
	Tooltip,
	ResponsiveContainer,
	YAxis,
} from "recharts";
import styles from "./SessionTime.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../service/getData";
import ModelisationClass from "../../model/ModelisationClass";

// Render a LineChart with user average sessions Data

function SessionTime() {
	const [data, setData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const data = async () => {
			const request = await getData("USER_AVERAGE_SESSIONS", id);
			if (!request) return alert("data error : Session");
			setData(request.data);
		};
		data();
	}, [id]);
	if (data.length === 0) return null;

	// format day for LineChart
	new ModelisationClass().FormatDay(data);

	// create a customTooltip for linechart
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div>
					<p className={styles.label}>{`${payload[0].value} min`}</p>
				</div>
			);
		}

		return null;
	};

	return (
		<>
			<p className={styles.title}>
				Durée moyennes des <br></br> sessions
			</p>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data.sessions}
					style={{
						background:
							"linear-gradient(270deg, rgba(230,0,0,1) 25%, rgba(255,0,0,1) 25%)",
					}}>
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						height={25}
						stroke="#FF8484"
						style={{
							fontSize: "13px",
						}}
					/>
					<YAxis
						hide={true}
						domain={["dataMin - 10", "dataMax + 20"]}
					/>
					<Line
						type="monotone"
						dataKey="sessionLength"
						dot={false}
						stroke="#FFF"
						strokeWidth={2}
					/>
					<Tooltip
						content={<CustomTooltip />}
						cursor={false}
						wrapperStyle={{
							width: "45px",
							height: "15px",
							background: "#FFFFFF",
							borderRadius: "0",
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default SessionTime;

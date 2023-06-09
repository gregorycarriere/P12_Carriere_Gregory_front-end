import {
	LineChart,
	Line,
	XAxis,
	Tooltip,
	ResponsiveContainer,
	YAxis,
} from "recharts";
import styles from "./SessionTime.module.css";

function SessionTime({ sess }) {
	sess.sessions.map(function (obj) {
		// eslint-disable-next-line default-case
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
		}

		return obj;
	});

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
					data={sess.sessions}
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

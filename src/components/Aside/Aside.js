function Aside(props) {
	return (
		<div>
			<img src={props.icon} alt={props.alt}></img>
			<div>
				<h2>
					{props.quantity}
					{props.unity}
				</h2>
				<p>{props.info}</p>
			</div>
		</div>
	);
}

export default Aside;

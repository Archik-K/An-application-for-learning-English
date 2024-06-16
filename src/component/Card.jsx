function Card(props) {
	return (
		<div className="Card">
			<div className="Card_container">
				<img className="img" src={props.imgLink} alt={props.title} />
				<h2>{props.name}</h2>
				<p>{props.briefly}</p>
				<button className="button" id="openModalBtn">
					{props.moredetailed}
				</button>
				<div id="myModal" className="modal">
					<div className="modal-content">
						<span className="close">&times;</span>
						<h4>{props.description}</h4>
						<p>{props.description2}</p>
						<ul>
							<li>{props.example1}</li>
						</ul>
						<p>{props.description3}</p>
						<ul>
							<li>{props.example2}</li>
						</ul>
						<p>{props.description4}</p>
						<ul>
							<li>{props.example3}</li>
						</ul>
						<p>{props.description5}</p>
						<ul>
							<li>{props.example4}</li>
						</ul>
						<p>{props.description6}</p>
						<ul>
							<li>{props.example5}</li>
						</ul>
						<p>{props.description7}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Card;

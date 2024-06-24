import styles from "./Modal.module.css";

function ModalContent(props) {
	return (
		<div>
			<button className={styles.button} id="openModalBtn">
				{props.moredetailed}
			</button>
			<div id="myModal" className={styles.modal}>
				<div className={styles.modal_content}>
					<span className={styles.close}>&times;</span>
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
	);
}
export default ModalContent;

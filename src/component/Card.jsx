import ModalContentOne from "./ModalContentOne";
import styles from "./Card.module.css";
import style from "./Header.module.css";

function Card(props) {
	return (
		<div className={styles.Card}>
			<div className={styles.Card_container}>
				<img className={style.img} src={props.imgLink} alt={props.title} />
				<h2>{props.name}</h2>
				<p>{props.briefly}</p>
				<ModalContentOne />
			</div>
		</div>
	);
}
export default Card;

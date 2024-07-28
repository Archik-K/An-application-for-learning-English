import React from "react";
import useFocus from "../hooks/useFocus"; // импортируем хук
import styles from "./Card.module.css";

const Card = ({
	imgLink,
	name,
	title,
	briefly,
	showTranslation,
	onShowTranslation,
}) => {
	const buttonRef = useFocus([showTranslation]); // используем хук

	const handleShowTranslation = (e) => {
		e.stopPropagation();
		onShowTranslation();
	};

	return (
		<div className={styles.Card}>
			<img src={imgLink} alt={title} className={styles.image} />
			<h2>{title}</h2>
			<p>{name}</p>
			{showTranslation ? (
				<p className={styles.descriptionCard}>{briefly}</p>
			) : (
				<button
					ref={buttonRef}
					className={styles.translationButton}
					onClick={handleShowTranslation}
				>
					Показать перевод
				</button>
			)}
		</div>
	);
};

export default Card;

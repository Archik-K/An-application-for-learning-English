import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ imgLink, name, title, briefly, isSelected, onSelect }) => {
	const [showTranslation, setShowTranslation] = useState(false);

	const cardClass = isSelected
		? `${styles.Card} ${styles.selected}`
		: styles.Card;

	const handleShowTranslation = (e) => {
		e.stopPropagation();
		setShowTranslation(true);
	};

	return (
		<div className={cardClass} onClick={onSelect}>
			<img src={imgLink} alt={title} className={styles.image} />
			<h2>{title}</h2>
			<p>{name}</p>
			{showTranslation ? (
				<p className={styles.descriptionCard}>{briefly}</p>
			) : (
				<button
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

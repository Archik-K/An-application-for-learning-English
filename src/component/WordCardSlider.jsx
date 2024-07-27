// components/WordCardSlider.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import useStudiedWords from "../hooks/useStudiedWords";
import styles from "./WordCardSlider.module.css";

const WordCardSlider = ({ words, initialIndex }) => {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);
	const [direction, setDirection] = useState("");
	const [isAnimating, setIsAnimating] = useState(false);
	const [studiedCount, incrementStudiedCount] = useStudiedWords();
	const [showTranslation, setShowTranslation] = useState(false);

	const handleNext = () => {
		if (isAnimating) return;
		setDirection("next");
		setIsAnimating(true);
		setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
		setShowTranslation(false);
	};

	const handlePrev = () => {
		if (isAnimating) return;
		setDirection("prev");
		setIsAnimating(true);
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + words.length) % words.length
		);
		setShowTranslation(false);
	};

	useEffect(() => {
		if (isAnimating) {
			const timeout = setTimeout(() => setIsAnimating(false), 500);
			return () => clearTimeout(timeout);
		}
	}, [isAnimating]);

	const handleShowTranslation = (word) => {
		setShowTranslation(true);
		incrementStudiedCount(word);
	};

	if (words.length === 0) {
		return <p>No words to display</p>;
	}

	return (
		<div className={styles.sliderContainer}>
			<button onClick={handlePrev} className={styles.arrowButton}>
				←
			</button>
			<div className={styles.cardContainer}>
				<div
					className={`${styles.cardWrapper} ${
						isAnimating
							? direction === "next"
								? styles.slideNext
								: styles.slidePrev
							: ""
					}`}
				>
					<Card
						imgLink={words[currentIndex].imgLink}
						name={words[currentIndex].name}
						title={words[currentIndex].title}
						briefly={words[currentIndex].briefly}
						showTranslation={showTranslation}
						onShowTranslation={() =>
							handleShowTranslation(words[currentIndex].title)
						}
					/>
				</div>
				<p className={styles.cardNumber}>
					{currentIndex + 1} / {words.length}
				</p>
				<p>Изучено слов: {studiedCount}</p>
			</div>
			<button onClick={handleNext} className={styles.arrowButton}>
				→
			</button>
		</div>
	);
};

WordCardSlider.propTypes = {
	words: PropTypes.arrayOf(
		PropTypes.shape({
			imgLink: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			briefly: PropTypes.string.isRequired,
		})
	).isRequired,
	initialIndex: PropTypes.number,
};

WordCardSlider.defaultProps = {
	initialIndex: 0,
};

export default WordCardSlider;

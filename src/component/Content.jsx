import React from "react";
import styles from "./Content.module.css";
import WordList from "./WordList";
import List from "./List";

function Content() {
	return (
		<div className={styles.content}>
			<h1>Карточки слов</h1>
			<section className={styles.Cards}>
				<List />
			</section>
			<section>
				<WordList />
			</section>
		</div>
	);
}

export default Content;

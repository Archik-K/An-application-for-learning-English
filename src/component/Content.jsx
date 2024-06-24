import Cards from "./Cards";
import styles from "./Content.module.css";
import WordList from "./WordList";

function Content() {
	return (
		<div className={styles.content}>
			<h1>Карточки слов</h1>
			<section className={styles.Cards}>
				<Cards />
			</section>
			<section>
				<WordList />
			</section>
		</div>
	);
}
export default Content;

import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img
					className={styles.img_logo}
					src="https://egi.edu.kz/wp-content/uploads/2017/10/child_flag_en.png"
				/>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<a href="#home">Главная</a>
					</li>
					<li>
						<a href="#about">О нас</a>
					</li>
					<li>
						<a href="#services">Услуги</a>
					</li>
					<li>
						<a href="#contact">Контакты</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
export default Header;

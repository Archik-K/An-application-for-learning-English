import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link to="/">
					<img
						className={styles.img_logo}
						src="https://egi.edu.kz/wp-content/uploads/2017/10/child_flag_en.png"
						alt="Logo"
					/>
				</Link>
			</div>
			<nav className={styles.nav}>
				<ul>
					<li>
						<Link to="/">Главная</Link>
					</li>
					<li>
						<Link to="/list">Карточки</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<ul className="links">
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
				<div className="social">
					<a href="https://facebook.com" target="_blank">
						Facebook
					</a>
					<a href="https://twitter.com" target="_blank">
						Twitter
					</a>
					<a href="https://instagram.com" target="_blank">
						Instagram
					</a>
				</div>
			</div>
			<p>&copy; 2024 Моя Компания. Все права защищены.</p>
		</footer>
	);
}
export default Footer;

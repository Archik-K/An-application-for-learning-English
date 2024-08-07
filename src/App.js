import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import List from "./component/List";
import NotFound from "./component/NotFound";
import styles from "./App.css";

function App() {
	return (
		<Router>
			<div className={styles.container}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/list" element={<List />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
/* //Если не отображается сайт, то код ниже надо скопировать и удалить, потом обратно его вернуть и всё работает.
//Я просто не додумалась, как иначе сделать)

// Получить модальное окно
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальное окно
let btn = document.getElementById("openModalBtn");

// Получить элемент <span>, который закрывает модальное окно
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальное окно
btn.onclick = function () {
	modal.style.display = "block";
};

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
	modal.style.display = "none";
};

// Когда пользователь нажимает в любом месте за пределами модального окна, закройте его
window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
};
 */

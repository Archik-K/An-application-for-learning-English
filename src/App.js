import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Content from "./component/Content";

function App() {
	return (
		<div className="App">
			<Header />
			<Content />
			<Footer />
		</div>
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
}; */

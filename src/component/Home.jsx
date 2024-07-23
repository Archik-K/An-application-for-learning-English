import React from "react";
import WordList from "./WordList";

function Home() {
	return (
		<div>
			<h1 className={WordList.h1}>Главная страница</h1>
			<WordList />
		</div>
	);
}

export default Home;

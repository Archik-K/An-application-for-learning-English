import React from "react";
import WordCardSlider from "./WordCardSlider";

const data = [
	{
		imgLink:
			"https://www.國營事業招考.tw/wp-content/uploads/2020/04/國營事業招考-03.png",
		name: "Whatever[wɒt'evə]-pronoun",
		title: "Whatever",
		briefly:
			"Перевод слова whatever: pronoun: что угодно. pronoun: все. pronoun: любой, какой угодно.",
	},
	{
		imgLink:
			"https://olegbutorin.ru/wp-content/uploads/2019/06/kissclipart-market-research-clipart-market-research-clip-art-28cce1a54347d6ed.png",
		name: "Detailed [ˈdiːteɪld] – adjective",
		title: "Detailed",
		briefly:
			"Перевод слова detailed: adjective: подробный, детальный, обстоятельный. adverb: детально, подробно. participle: детализированный. participle: развернутый. participle: углубленный.",
	},
	{
		imgLink: "https://cdn141.picsart.com/290274989003211.png",
		name: "Civilization [sɪv(ə)laɪˈzeɪʃn] – noun",
		title: "Civilization",
		briefly:
			"Перевод слова civilization: noun: цивилизация, культура, цивилизованность. adjective: цивилизационный.",
	},
];

function List() {
	return <WordCardSlider words={data} />;
}

export default List;

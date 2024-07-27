import { useState } from "react";

const useStudiedWords = () => {
	const [studiedWords, setStudiedWords] = useState(new Set());

	const incrementStudiedCount = (word) => {
		setStudiedWords((prevWords) => {
			const newWords = new Set(prevWords);
			newWords.add(word);
			return newWords;
		});
	};
	return [studiedWords.size, incrementStudiedCount];
};

export default useStudiedWords;

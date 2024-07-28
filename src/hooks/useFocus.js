// src/hooks/useFocus.js
import { useEffect, useRef } from "react";

const useFocus = (dependencies = []) => {
	const ref = useRef(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.focus();
		}
	}, dependencies); // Устанавливаем фокус, когда изменяются зависимости

	return ref;
};

export default useFocus;

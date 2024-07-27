// hooks/useFocus.js
import { useRef, useEffect } from "react";

const useFocus = (deps = []) => {
	const elementRef = useRef(null);

	useEffect(() => {
		if (elementRef.current) {
			elementRef.current.focus();
		}
	}, deps);

	return elementRef;
};

export default useFocus;

import { RefObject } from 'react';

const scrollBackground = (ref: RefObject<HTMLDivElement>) => {
	if (ref.current) {
		const element = ref.current;
		const actualPosition = element.getBoundingClientRect().top;
		console.log(actualPosition, window.innerHeight);
		const newPos =
			(actualPosition * window.innerHeight * 0.1) / window.innerHeight;
		element.style.backgroundPosition = `0% ${newPos}px`;
	}
};
export default scrollBackground;

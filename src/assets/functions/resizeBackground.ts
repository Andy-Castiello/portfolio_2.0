import { RefObject } from 'react';
import scrollBackground from './scrollBackground';
type image = {
	url: string;
	width: number;
	height: number;
	ratio: number;
};
const resizeBackground = (ref: RefObject<HTMLDivElement>, image: image) => {
	if (ref.current) {
		const element = ref.current;
		const actualRatio = window.innerWidth / (window.innerHeight * 1.1);
		let newHeight = 0;
		let newWidth = 0;
		if (actualRatio >= image.ratio) {
			newWidth = window.innerWidth;
			newHeight = newWidth / image.ratio;
		} else {
			newHeight = window.innerHeight * 1.1;
			newWidth = newHeight * image.ratio;
		}
		element.style.backgroundSize = `${newWidth}px ${newHeight}px`;
		scrollBackground(ref);
	}
};
export default resizeBackground;

import { useEffect, useRef } from 'react';
import resizeBackground  from '../../assets/functions/resizeBackground';
import scrollBackground from '../../assets/functions/scrollBackground';
import './FrontPage.scss';

const backgroundImage = {
	url: require('../../assets/images/codeImage.jpg'),
	width: 1000,
	height: 667,
	ratio: 1000 / 667,
};

const FrontPage = () => {
	const frontRef = useRef<HTMLDivElement>(null);
	window.addEventListener('resize', ()=>resizeBackground(frontRef,backgroundImage));
	document.addEventListener('scroll',()=> scrollBackground(frontRef));
	useEffect(()=>resizeBackground(frontRef,backgroundImage), []);
	return (
		<div
			style={{ backgroundImage: `url(${backgroundImage.url})` }}
			className="front-page"
			id="front-page"
			ref={frontRef}
		>
			<div className="front-page__cover">
				<span className="front-page__span">Hi...!</span>
				<h1 className="front-page__h1">I'm Andy</h1>
				<span className="front-page__span">Web Developer</span>
			</div>
		</div>
	);
};
export default FrontPage;

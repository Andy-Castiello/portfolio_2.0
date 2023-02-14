import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import FrontPage from './FrontPage/FrontPage';
import MyWork from './MyWork/MyWork';
import { useRef } from 'react';
import './Main.scss';

const backgroundImage = require('../assets/images/hexagon.png');

const Main = () => {
	const mainRef = useRef<HTMLDivElement>(null);
	document.addEventListener('mousemove', (event) => {
		if (mainRef.current) {
			document.documentElement.style.setProperty(
				'--cursorX',
				event.pageX -
					mainRef.current.getBoundingClientRect().left +
					'px'
			);
			document.documentElement.style.setProperty(
				'--cursorY',
				event.pageY + 'px'
			);
		}
	});
	return (
		<div
			style={{ backgroundImage: `url(${backgroundImage})` }}
			className="main"
			ref={mainRef}
		>
			<FrontPage />
			<AboutMe />
			<MyWork />
			<Contact />
		</div>
	);
};

export default Main;

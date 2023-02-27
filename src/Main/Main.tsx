import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import FrontPage from './FrontPage/FrontPage';
import MyWork from './MyWork/MyWork';
import { useRef } from 'react';
import './Main.scss';
import { useAppSelector } from '../store/hooks';

const backgroundImage = require('../assets/images/hexagon.png');

const Main = () => {
	const mainRef = useRef<HTMLDivElement>(null);

	const mainDisplay = useAppSelector((state) => state.mainSlice.display);

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
			{mainDisplay === 'normal' ? (
				<>
					<FrontPage />
					<AboutMe />
					<MyWork />
				</>
			) : undefined}
			<Contact />
		</div>
	);
};

export default Main;

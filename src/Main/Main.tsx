import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import FrontPage from './FrontPage/FrontPage';
import MyWork from './MyWork/MyWork';
import './Main.scss';

const Main = () => {
	return (
		<div className="main">
			<FrontPage />
			<AboutMe />
			<MyWork />
			<Contact />
		</div>
	);
};

export default Main;

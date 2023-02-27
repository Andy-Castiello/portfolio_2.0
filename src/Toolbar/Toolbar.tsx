import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setMainDisplay } from '../store/slices/mainSlice/mainSlice';
import './Toolbar.scss';

const Toolbar = () => {
	const mainDisplay = useAppSelector((state) => state.mainSlice.display);
	const dispatch = useAppDispatch();

	const handleNavClick = () => {
		if (mainDisplay !== 'normal') dispatch(setMainDisplay('normal'));
	};
	return (
		<div className="toolbar">
			<div className="toolbar__home">
				<a onClick={handleNavClick} href="#front-page">
					A
				</a>
			</div>
			<nav className="toolbar__nav">
				<a
					onClick={handleNavClick}
					className="toolbar__link"
					href="#about-me"
				>
					About Me
				</a>
				<a
					onClick={handleNavClick}
					className="toolbar__link"
					href="#my-work"
				>
					My Work
				</a>
				<a
					onClick={handleNavClick}
					className="toolbar__link"
					href="#contact"
				>
					Contact
				</a>
			</nav>
			<div className="toolbar__social-networks">
				<a
					className="toolbar__link"
					href="https://www.linkedin.com/in/andr%C3%A9s-castiello-ab262a218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU0DgXKW1RHaAHMm87uqwhA%3D%3D"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa fa-linkedin-square"></i>
				</a>
				<a
					className="toolbar__link"
					href="https://github.com/Andy-Castiello"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa fa-github"></i>
				</a>
				<a
					className="toolbar__link"
					href="https://walink.co/0bfc61"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa fa-whatsapp"></i>
				</a>
				<a
					className="toolbar__link"
					href="https://t.me/AndyCas_96"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa fa-telegram"></i>
				</a>
			</div>
		</div>
	);
};

export default Toolbar;

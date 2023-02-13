import './Toolbar.scss';

const Toolbar = () => {
	return (
		<div className="toolbar">
			<a className="toolbar__link" href="#front-page">
				Front Page
			</a>
			<a className="toolbar__link" href="#about-me">
				About Me
			</a>
			<a className="toolbar__link" href="#my-work">
				My Work
			</a>
			<a className="toolbar__link" href="#contact">
				Contact
			</a>
		</div>
	);
};

export default Toolbar;

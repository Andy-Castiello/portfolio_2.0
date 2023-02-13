import './FrontPage.scss';

const codeImage = require('../../assets/images/codeImage.jpg');

const FrontPage = () => {
	return (
		<div
			style={{ backgroundImage: `url(${codeImage})` }}
			className="front-page"
			id='front-page'
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

import './MyWork.scss';

const languagesImage = require('../../assets/images/languagesImage.webp');

type work = {
	title: string;
	image: string;
	link: string;
	description: string;
};

const MyWork = () => {
	const worksList = require('../../assets/json/data.json')['works'];
	return (
		<div
			style={{ backgroundImage: `url(${languagesImage})` }}
			className="my-work"
			id="my-work"
		>
			<div className="my-work__cover">
				<div className="my-work__container">
					<h2 className="my-work__h2">My Work</h2>
					<div className="my-work__works">
						{worksList.map((work: work) => (
							<div className="my-work__work">
								<div
									className="my-work__work__image"
									style={{
										backgroundImage: `url(${work.image})`,
									}}
								/>
								<div className="my-work__work__info">
									<span>{work.title}</span>
									<p>{work.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyWork;

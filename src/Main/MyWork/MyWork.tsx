import './MyWork.scss';
import { useEffect, useRef } from 'react';
import resizeBackground from '../../assets/functions/resizeBackground';
import scrollBackground from '../../assets/functions/scrollBackground';

const languagesImage = require('../../assets/images/languagesImage.webp');

type work = {
	title: string;
	image: string;
	link: string;
	description: string;
};
const backgroundImage = {
	url: require('../../assets/images/languagesImage.webp'),
	width: 1200,
	height: 900,
	ratio: 1200 / 900,
};

const MyWork = () => {
	const worksList = require('../../assets/data/json/data.json')['works'];
	const workRef = useRef<HTMLDivElement>(null);
	window.addEventListener('resize', () =>
		resizeBackground(workRef, backgroundImage)
	);
	useEffect(() => {
		document.addEventListener('scroll', () => scrollBackground(workRef));
		resizeBackground(workRef, backgroundImage);
	}, []);
	return (
		<div
			style={{ backgroundImage: `url(${languagesImage})` }}
			className="my-work"
			id="my-work"
			ref={workRef}
		>
			<div className="my-work__cover">
				<div className="my-work__container">
					<h2 className="my-work__h2">My Work</h2>
					<div className="my-work__works">
						{worksList.map((work: work, i: number) => (
							<a
								href={work.link}
								target="_blank"
								key={i}
								className="my-work__work"
							>
								<div
									className="my-work__work__image"
									style={{
										backgroundImage: `url(${require(`../../assets/data/images/works/${work.image}`)})`,
									}}
								/>
								<div className="my-work__work__info">
									<span>{work.title}</span>
									<p>{work.description}</p>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyWork;

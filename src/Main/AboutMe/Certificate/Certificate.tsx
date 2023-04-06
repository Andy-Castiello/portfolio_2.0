import { useRef } from 'react';

interface props {
	title: string;
	institution: string;
	date: string;
	initialPosition: number;
}

const Certificate = (props: props) => {
	const position = useRef(props.initialPosition);

	const setPosition = () => {};
	const scroll = () => {};
	return (
		<div
			style={{ top: (props.initialPosition * 5).toString() + 'rem' }}
			className="about-me__certificate"
		>
			<h4 className="about-me__certificate__title">{props.title}</h4>
			<span className="about-me__certificate__institution">
				{props.institution}
			</span>
			<span className="about-me__certificate__date">{props.date}</span>
		</div>
	);
};

export default Certificate;

import Certificate from './Certificate/Certificate';
import pxToRem from '../../assets/functions/pxToRem';
import './AboutMe.scss';

type CertificateType = {
	title: string;
	institution: string;
	date: string;
	link: string;
};
type SkillType = {
	title: string;
	level: number;
};

const AboutMe = () => {
	const certificates = require('../../assets/data/json/data.json')[
		'certificates'
	];
	const skills = require('../../assets/data/json/data.json')['skills'];

	return (
		<div className="about-me" id="about-me">
			<div className="about-me__container">
				<h2 className="about-me__h2">About Me</h2>
				<p className="about-me__p">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Tempora, veniam nobis. Consequatur provident ipsa non
					officiis facere, aliquam perferendis quisquam aspernatur,
					architecto porro ex odit repellat id, culpa aliquid
					consectetur!
				</p>
				<div className="about-me__skills">
					{skills.map((skill: SkillType,i:number) => (
						<div key={i} className="about-me__skill">
							<span>{skill.title}</span>
							<div className="about-me__skill__bar">
								<div
									style={{ minWidth: `${skill.level}%` }}
									className="about-me__skill__light"
								/>
							</div>
						</div>
					))}
				</div>
				<div className="about-me__certificates">
					{certificates.map((certificate: CertificateType,i:number) => (
						<a href={certificate.link} target='_blank' key={i} className="about-me__certificate">
							<h4 className="about-me__certificate__title">
								{certificate.title}
							</h4>
							<span className="about-me__certificate__institution">
								{certificate.institution}
							</span>
							<span className="about-me__certificate__date">
								{certificate.date}
							</span>
						</a>
					))}
					{/* <Certificate
						title={certificate.title}
						institution={certificate.institution}
						date={certificate.date}
						initialPosition={i}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default AboutMe;

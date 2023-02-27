import { useState, ChangeEvent, SyntheticEvent } from 'react';
import axios from 'axios';
import './Contact.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setMainDisplay } from '../../store/slices/mainSlice/mainSlice';

type result = 'success' | 'failure';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [result, setResult] = useState<result>('failure');

	const dispatch = useAppDispatch();
	const mainDisplay = useAppSelector((state) => state.mainSlice.display);

	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target instanceof HTMLInputElement) {
			setName(event.target.value);
		}
	};
	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target instanceof HTMLInputElement) {
			setEmail(event.target.value);
		}
	};
	const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target instanceof HTMLInputElement) {
			setSubject(event.target.value);
		}
	};
	const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (event.target instanceof HTMLTextAreaElement) {
			setMessage(event.target.value);
		}
	};
	const handleSubmit = async (event:SyntheticEvent) => {
		event.preventDefault();
		try {
			const data = {
				body: {
					name,
					email,
					subject,
					message,
				},
			};
			const response = await axios.post(
				'https://formspree.io/f/mjvzbnbk',
				data
			);
			if (response.status === 200) {
				setResult('success');
			} else {
				setResult('failure');
			}
		} catch (error) {
			setResult('failure');
		}
		dispatch(setMainDisplay('contactResult'));
	};
	return (
		<div id="contact" className="contact">
			{mainDisplay === 'normal' ? (
				<div className="contact__container">
					<h2 className="contact__h2">Contact</h2>
					<form onSubmit={handleSubmit} className="contact__form">
						<input
							className="contact__name contact__text-input"
							type="text"
							name="name"
							placeholder="Name"
							value={name}
							onChange={handleNameChange}
							required
						/>
						<input
							className="contact__email contact__text-input"
							type="email"
							name="email"
							placeholder="E-Mail"
							value={email}
							onChange={handleEmailChange}
							required
						/>
						<input
							className="contact__subject contact__text-input"
							type="text"
							name="subject"
							placeholder="Subject"
							value={subject}
							onChange={handleSubjectChange}
							required
						/>
						<textarea
							className="contact__message contact__text-input"
							name="message"
							id=""
							cols={30}
							rows={10}
							placeholder="Message"
							value={message}
							onChange={handleMessageChange}
							required
						></textarea>
						<button className="contact__send">
							Send
						</button>
					</form>
				</div>
			) : result === 'success' ? (
				<div className="contact__result">
					<h2 className="contact__h2">Thanks for contacting me</h2>
					<span className="contact__span">
						I'll be answering your as soon as I can.
					</span>
				</div>
			) : (
				<div className="contact__result">
					<h2 className="contact__h2">
						It looks that something went wrong
					</h2>
					<span className="contact__span">
						You should try again later.
					</span>
				</div>
			)}

			<div className="contact__social-networks">
				<a
					className="contact__link"
					href="https://www.linkedin.com/in/andr%C3%A9s-castiello-ab262a218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BU0DgXKW1RHaAHMm87uqwhA%3D%3D"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa fa-linkedin-square"></i>
				</a>
				<a
					className="contact__link"
					href="https://github.com/Andy-Castiello"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa fa-github"></i>
				</a>
				<a
					className="contact__link"
					href="https://walink.co/0bfc61"
					target="_blank"
					rel="noreferrer"
				>
					<i className="fa fa-whatsapp"></i>
				</a>
				<a
					className="contact__link"
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

export default Contact;

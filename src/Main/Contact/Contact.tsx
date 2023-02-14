import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import './Contact.scss';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
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
	const handleSend = async () => {
		try {
			const data = {
				body: {
					name,
					email,
					subject,
					message,
				},
			};
			alert(JSON.stringify(data));
			const response = await axios.post(
				'https://formspree.io/f/mjvzbnbk',
				data
			);
			alert(response);
		} catch (error) {
			alert(error);
		}
	};
	return (
		<div id="contact" className="contact">
			<div className="contact__container">
				<h2 className="contact__h2">Contact</h2>
				<input
					className="contact__name contact__text-input"
					type="text"
					name="name"
					placeholder="Name"
					value={name}
					onChange={handleNameChange}
				/>
				<input
					className="contact__email contact__text-input"
					type="email"
					name="email"
					placeholder="E-Mail"
					value={email}
					onChange={handleEmailChange}
				/>
				<input
					className="contact__subject contact__text-input"
					type="text"
					name="subject"
					placeholder="Subject"
					value={subject}
					onChange={handleSubjectChange}
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
				></textarea>
				<span onClick={handleSend} className="contact__send">
					Send
				</span>
			</div>
		</div>
	);
};

export default Contact;

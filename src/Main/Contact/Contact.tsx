import './Contact.scss';

const Contact = () => {
	return (
		<div id="contact" className="contact">
			<div className="contact__container">
				<h2 className="contact__h2">Contact</h2>
				<input
					className="contact__name contact__text-input"
					type="text"
					name="name"
					placeholder="Name"
				/>
				<input
					className="contact__email contact__text-input"
					type="text"
					name="email"
					placeholder="E-Mail"
				/>
				<input
					className="contact__subject contact__text-input"
					type="text"
					name="subject"
					placeholder="Subject"
				/>
				<textarea
					className="contact__message contact__text-input"
					name="message"
					id=""
					cols={30}
					rows={10}
					placeholder="Message"
				></textarea>
				<span className="contact__send">Send</span>
			</div>
		</div>
	);
};

export default Contact;

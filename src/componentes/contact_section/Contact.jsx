import React, { useRef } from 'react';
import './contact.scss';
import { IoIosSend } from 'react-icons/io';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';
import { SiTelegram } from 'react-icons/si';
import { AiOutlineArrowRight } from 'react-icons/ai';
import backgoundImage from '../../assets/images/contact_bg.svg';
import emailjs from '@emailjs/browser';
import useElementOnScreen from '../../hooks/useElementOnScreen';

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_ugh5g4c', 'template_ijhi9c8', form.current, 'F1fxpUCPh8Zbhy59y');

		e.target.reset();
	};
	const contactTitle = useRef();
	const contactLinks = useRef(new Array());
	const inputs = useRef(new Array());

	const titleIsVisible = useElementOnScreen(
		{ root: null, rootMargin: '0px', threshold: 1 },
		contactTitle
	);

	const contactLinksIsVisible = useElementOnScreen(
		{ root: null, rootMargin: '0px', threshold: 1 },
		contactLinks
	);

	const inputIsVisible = useElementOnScreen(
		{ root: null, rootMargin: '0px', threshold: 0.5 },
		inputs
	);

	return (
		<div className='contact' id='contact_section'>
			<div className='contact__heading_wrapper'>
				<div className='contact__wrapper'>
					<div
						className={`contact__heading ${
							titleIsVisible ? 'contact__title_visible' : 'contact__title_notVisible'
						}`}
						ref={contactTitle}
					>
						<h1>
							Let's
							<svg className='contact__arrow' viewBox='0 0 174 127' fill='none'>
								<path
									d='M1.59181 24.377C72.2725 -35.0914 202.54 35.3266 165.445 94.1579C159.699 103.271 147.336 114.968 147.336 114.968L149.896 99.6567L135.651 124.117L162.008 116.083'
									stroke='#FF00FF'
									strokeWidth='4'
								/>
							</svg>
							{/* <img src={Arrow} className="contact__arrow" /> */}
							<br />
							Connect.
						</h1>
						<p>
							Now that you know a lot about me, let me know if you are interested in working with
							me.
						</p>
					</div>
				</div>
			</div>
			<div className='contact__body_wrapper'>
				<div className='contact__form_wrapper'>
					<form onSubmit={sendEmail} ref={form}>
						<div
							className={`contact__input_group
								${inputIsVisible ? 'contact__input_visible' : 'contact__input_notVisible'}
							`}
							ref={(e) => inputs.current.push(e)}
							style={{ '--order': 4 }}
						>
							<input
								className='input'
								autoComplete='off'
								type='text'
								id='noautofill_name'
								name='noautofill_name'
								// placeholder="Name"
								required
							/>
							<label htmlFor='noautofill_name' className='contact__input_label'>
								Name
							</label>
						</div>
						<div
							className={`contact__input_group
								${inputIsVisible ? 'contact__input_visible' : 'contact__input_notVisible'}
							`}
							ref={(e) => inputs.current.push(e)}
							style={{ '--order': 3 }}
						>
							<input
								className='input'
								autoComplete='off'
								type='email'
								id='noautofill_email'
								name='noautofill_email'
								// placeholder="Email"
								required
							/>
							<label htmlFor='noautofill_email' className='contact__input_label'>
								Email
							</label>
						</div>
						<div
							className={`contact__input_group
								${inputIsVisible ? 'contact__input_visible' : 'contact__input_notVisible'}
							`}
							ref={(e) => inputs.current.push(e)}
							style={{ '--order': 2 }}
						>
							<textarea
								className='input'
								autoComplete='off'
								type='text'
								id='noautofill_message'
								name='noautofill_message'
								// placeholder="Message"
								required
							/>
							<label htmlFor='noautofill_message' className='contact__input_label'>
								Message
							</label>
						</div>
						<button
							type='submit'
							className={`contact__sumbit
								${inputIsVisible ? 'contact__input_visible' : 'contact__input_notVisible'}
							`}
							ref={(e) => inputs.current.push(e)}
							style={{ '--order': 2 }}
						>
							<span>Send Message</span> <IoIosSend />
						</button>
					</form>
					<div
						style={{
							borderLeft: '2px solid #373737',
							height: '35vh',
							marginTop: '2vh',
						}}
					></div>
					<div className='contact__links'>
						<a
							className={
								contactLinksIsVisible ? 'contact__link_visible' : 'contact__link_notVisible'
							}
							ref={(e) => contactLinks.current.push(e)}
							style={{ '--order': 5 }}
							target='_blank'
							href='mailto:petar@deljanin.dev'
						>
							<div>
								<AiOutlineArrowRight className='contact__arrow_icon' />
								<MdMail className='contact__icon' />
								petar@deljanin.dev
							</div>
						</a>
						<a
							className={
								contactLinksIsVisible ? 'contact__link_visible' : 'contact__link_notVisible'
							}
							ref={(e) => contactLinks.current.push(e)}
							style={{ '--order': 4 }}
							target='_blank'
							href='https://t.me/petardeljanin'
						>
							<div>
								<AiOutlineArrowRight className='contact__arrow_icon' />
								<SiTelegram className='contact__icon' />
								@petardeljanin
							</div>
						</a>

						<a
							className={
								contactLinksIsVisible ? 'contact__link_visible' : 'contact__link_notVisible'
							}
							ref={(e) => contactLinks.current.push(e)}
							style={{ '--order': 3 }}
							target='_blank'
							href='https://www.linkedin.com/in/petar-deljanin-0762481a6/'
						>
							<div>
								<AiOutlineArrowRight className='contact__arrow_icon' />
								<FaLinkedin className='contact__icon' />
								petardeljanin
							</div>
						</a>
						<a
							className={
								contactLinksIsVisible ? 'contact__link_visible' : 'contact__link_notVisible'
							}
							ref={(e) => contactLinks.current.push(e)}
							style={{ '--order': 2 }}
							target='_blank'
							href='https://github.com/deljanin'
						>
							<div>
								<AiOutlineArrowRight className='contact__arrow_icon' />
								<FaGithub className='contact__icon' />
								deljanin
							</div>
						</a>
						<a
							className={
								contactLinksIsVisible ? 'contact__link_visible' : 'contact__link_notVisible'
							}
							ref={(e) => contactLinks.current.push(e)}
							style={{ '--order': 1 }}
							target='_blank'
							href='./Petar_Deljanin_Resume.pdf'
						>
							<div>
								<AiOutlineArrowRight className='contact__arrow_icon' />
								<BsFileEarmarkPersonFill className='contact__icon' />
								resume
							</div>
						</a>
					</div>
				</div>
				<img src={backgoundImage} className='contact__bg' />
			</div>
		</div>
	);
};

export default Contact;

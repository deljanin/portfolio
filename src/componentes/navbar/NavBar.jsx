import React, { useState, useRef, useEffect } from 'react';
import './navbar.scss';
import logoImg from '../../assets/images/P_logo2.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const NavBar = () => {
	const [active, setActive] = useState('nav__menu');
	const [icon, setIcon] = useState('nav__toggler');
	const navToggle = () => {
		if (active === 'nav__menu') {
			setActive('nav__menu nav__active');
		} else setActive('nav__menu');

		// Icon Toggler
		if (icon === 'nav__toggler') {
			setIcon('nav__toggler toggle');
		} else setIcon('nav__toggler');
	};

	const navRef = useRef();
	useEffect(() => {
		const vh = window.innerHeight;
		// const [fixedNav, setFixedNav] = useState(false);
		function setFixed() {
			if (window.scrollY >= 55 && window.scrollY < vh) {
				navRef.current.className = 'nav nav__sticky_bg_dark';
				// setFixed(true);
			} else if (
				(window.scrollY >= vh && window.scrollY < vh * 2.22) ||
				(window.scrollY >= vh * 6.25 && window.scrollY < vh * 7.14)
			) {
				navRef.current.className = 'nav nav__sticky_bg_light';
			} else if (window.scrollY >= vh * 2.22 || window.scrollY >= vh * 7.14) {
				navRef.current.className = 'nav nav__sticky_bg_gray';
			} else {
				navRef.current.className = 'nav ';
				// setFixed(false);
			}
		}
		window.addEventListener('scroll', setFixed);
	});
	return (
		<nav className='nav' ref={navRef}>
			<div className='nav_wrapper'>
				<div className='nav__brand_wrapper'>
					<a href='#sphere_section'>
						<img src={logoImg} alt='Logo' className='nav__brand' />
					</a>
				</div>
				<div className={active}>
					<button className='nav__item'>
						<a href='#skills_section' className='nav__link'>
							Skillset
						</a>
					</button>
					<button className='nav__item'>
						<a href='#projects_section' className='nav__link'>
							Portfolio
						</a>
					</button>
					<button className='nav__item'>
						<a href='#about_me_section' className='nav__link'>
							About
						</a>
					</button>
					<button className='nav__item'>
						<a href='#contact_section' className='nav__link'>
							Contact
						</a>
					</button>
					<button className='nav__item'>
						<a href='./Petar_Deljanin_Resume.pdf' target='_blank' className='nav__link'>
							Resume
						</a>
					</button>
				</div>
				<div className='nav__icons'>
					<a
						href='https://www.linkedin.com/in/petar-deljanin-0762481a6/'
						target='_blank'
						className='nav_icon'
					>
						<FaLinkedin />
					</a>
					<a href='https://github.com/deljanin' target='_blank' className='nav_icon'>
						<FaGithub />
					</a>
					<a href='mailto:petar@deljanin.dev' className='nav_icon'>
						<MdMail />
					</a>
				</div>
			</div>
			<div onClick={navToggle} className={icon}>
				<div className='line1'></div>
				<div className='line2'></div>
				<div className='line3'></div>
			</div>
		</nav>
	);
};

export default NavBar;

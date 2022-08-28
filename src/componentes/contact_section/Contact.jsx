import React from "react";
import { useRef, useEffect } from "react";
import "./contact.scss";
import { IoIosSend } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import backgoundImage from "../../assets/images/contact_bg.svg";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const contactContainer = useRef();
  const form = useRef();
  const contactTitle = useRef();
  const contactLinks = useRef(new Array());

  useEffect(() => {
    const animateTitle = gsap
      .fromTo(
        contactTitle.current,
        { autoAlpha: 0, x: -50 },
        { duration: 1, autoAlpha: 1, x: 0 }
      )
      .delay(0.5);
    const animateForm = gsap
      .fromTo(
        form.current,
        { autoAlpha: 0, x: -50, y: 25 },
        { duration: 1, autoAlpha: 1, x: 0, y: 0 }
      )
      .delay(0.8);
    let animArr = [];
    let i = 0;
    contactLinks.current.forEach((element) => {
      // console.log(element);
      animArr.push(
        gsap
          .fromTo(
            element,
            { autoAlpha: 0, x: 80 },
            { duration: 1, autoAlpha: 1, x: 0 }
          )
          .delay(0.8 + i)
      );
      i += 0.1;
    });
    let arr = [animateTitle, animateForm];
    arr = arr.concat(animArr);
    // console.log(arr);

    arr.forEach((element) => {
      ScrollTrigger.create({
        trigger: contactContainer.current,
        start: "top bottom",
        animation: element,
        toggleActions: "restart none none none",
        once: true,
      });
    });
  });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ugh5g4c",
      "template_ijhi9c8",
      form.current,
      "F1fxpUCPh8Zbhy59y"
    );

    e.target.reset();
  };

  return (
    <div className="contact" id="contact_section">
      <div className="contact__heading_wrapper">
        <div className="contact__wrapper">
          <div className="contact__heading" ref={contactTitle}>
            <h1>
              Let's
              <svg className="contact__arrow" viewBox="0 0 174 127" fill="none">
                <path
                  d="M1.59181 24.377C72.2725 -35.0914 202.54 35.3266 165.445 94.1579C159.699 103.271 147.336 114.968 147.336 114.968L149.896 99.6567L135.651 124.117L162.008 116.083"
                  stroke="#FF00FF"
                  strokeWidth="4"
                />
              </svg>
              {/* <img src={Arrow} className="contact__arrow" /> */}
              <br />
              Connect.
            </h1>
            <p>
              Now that you know a lot about me, let me know if you are
              interested in working with me.
            </p>
          </div>
        </div>
      </div>
      <div className="contact__body_wrapper" ref={contactContainer}>
        <div className="contact__form_wrapper">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact__input_group">
              <input
                className="input"
                autoComplete="off"
                type="text"
                id="noautofill_name"
                name="noautofill_name"
                // placeholder="Name"
                required
              />
              <label htmlFor="noautofill_name" className="user-label">
                Name
              </label>
            </div>
            <div className="contact__input_group">
              <input
                className="input"
                autoComplete="off"
                type="email"
                id="noautofill_email"
                name="noautofill_email"
                // placeholder="Email"
                required
              />
              <label htmlFor="noautofill_email" className="user-label">
                Email
              </label>
            </div>
            <div className="contact__input_group">
              <textarea
                className="input"
                autoComplete="off"
                type="text"
                id="noautofill_message"
                name="noautofill_message"
                // placeholder="Message"
                required
              />
              <label htmlFor="noautofill_message" className="user-label">
                Message
              </label>
            </div>
            <button type="submit" className="contact__sumbit">
              <span>Send Message</span> <IoIosSend />
            </button>
          </form>
          <div
            style={{
              borderLeft: "2px solid #373737",
              height: "35vh",
              marginTop: "2vh",
            }}
          ></div>
          <div className="contact__links">
            <a href="mailto:petar@deljanin.dev">
              <div ref={(e) => contactLinks.current.push(e)}>
                <AiOutlineArrowRight className="contact__arrow_icon" />
                <MdMail className="contact__icon" />
                petar@deljanin.dev
              </div>
            </a>
            <a href="https://t.me/petardeljanin">
              <div ref={(e) => contactLinks.current.push(e)}>
                <AiOutlineArrowRight className="contact__arrow_icon" />
                <SiTelegram className="contact__icon" />
                @petardeljanin
              </div>
            </a>

            <a href="https://www.linkedin.com/in/petar-deljanin-0762481a6/">
              <div ref={(e) => contactLinks.current.push(e)}>
                <AiOutlineArrowRight className="contact__arrow_icon" />
                <FaLinkedin className="contact__icon" />
                petardeljanin
              </div>
            </a>
            <a href="https://github.com/deljanin">
              <div ref={(e) => contactLinks.current.push(e)}>
                <AiOutlineArrowRight className="contact__arrow_icon" />
                <FaGithub className="contact__icon" />
                deljanin
              </div>
            </a>
            <a href="./Petar_Deljanin_Resume.pdf">
              <div ref={(e) => contactLinks.current.push(e)}>
                <AiOutlineArrowRight className="contact__arrow_icon" />
                <BsFileEarmarkPersonFill className="contact__icon" />
                resume
              </div>
            </a>
          </div>
        </div>
        <img src={backgoundImage} className="contact__bg" />
      </div>
    </div>
  );
};

export default Contact;

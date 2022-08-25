import React from "react";
import { useRef } from "react";
import "./contact.scss";
import { IoIosSend } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import backgoundImage from "../../assets/images/contact_bg.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

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
          <div className="contact__heading">
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
      <div className="contact__body_wrapper">
        <div className="contact__form_wrapper">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact__input_group">
              <label htmlFor="noautofill_name">Name</label>
              <input
                className="input"
                autoComplete="off"
                type="text"
                id="noautofill_name"
                name="noautofill_name"
                // placeholder="Name"
                required
              />
            </div>
            <div className="contact__input_group">
              <label htmlFor="noautofill_email">Email</label>
              <input
                className="input"
                autoComplete="off"
                type="email"
                id="noautofill_email"
                name="noautofill_email"
                // placeholder="Email"
                required
              />
            </div>
            <div className="contact__input_group">
              <label htmlFor="noautofill_message">Message</label>
              <textarea
                className="input"
                autoComplete="off"
                type="text"
                id="noautofill_message"
                name="noautofill_message"
                // placeholder="Message"
                required
              />
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
            <a href="mailto:petar.deljanin@hotmail.com">
              <div>
                <MdMail className="contact__icon" />
                petardeljanin@hotmail.com
              </div>
            </a>
            <a href="/Petar_Deljanin_Resume.pdf">
              <div>
                <BsFileEarmarkPersonFill className="contact__icon" />
                resume
              </div>
            </a>
            <a href="https://www.linkedin.com/in/petar-deljanin-0762481a6/">
              <div>
                <FaLinkedin className="contact__icon" />
                petardeljanin
              </div>
            </a>
            <a href="https://github.com/deljanin">
              <div>
                <FaGithub className="contact__icon" />
                deljanin
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

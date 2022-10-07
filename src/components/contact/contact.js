import React from "react";
import Footer from "../landing/footer";
import Header from "../landing/header";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github-logo.png";
import illustrator from "../assets/illustrator.svg";

function Contact() {
  return (
    <>
      <Header />
      <section id="contact_me">
        <div id="contact_cont">
          <div id="contact_socials">
            <a
              className="social"
              rel="noopener noreferrer"
              href="https://github.com/MokuaEnock"
              target="_blank"
            >
              <img src={github} alt="github" target="_blank" rel="noopener" />
            </a>
            <a
              className="social"
              href="https://twitter.com/254_enok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              className="social"
              href="https://www.instagram.com/enok_254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              className="social"
              href="https://www.linkedin.com/in/enockmokua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
          <div id="contact_body">
            <form>
              <h2>
                Contact<strong> Us</strong>
              </h2>
              <p>We value your feedback.</p>
              <div id="form_cont_name">
                <label htmlFor="name_input">Your Name</label>
                <input type="text" name="name" id="name_input" />
              </div>

              <div id="form_cont_email">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" />
              </div>

              <div id="form_cont_message">
                <label htmlFor="message">Your Message</label>
                <textarea
                  type="text"
                  id="message"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
              <div id="form_cont_submit">
                <button type="submit">
                  <span className="button_span1"> Message </span>
                  <span className="button_span2">
                    <img src="/assets/images/right-up.png" alt="" />
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div id="contact_image">
            <div id="contact_img">
              <img src={illustrator} alt="illustration" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;

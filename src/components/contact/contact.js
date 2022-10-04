import React from "react";
import Footer from "../landing/footer";
import Header from "../landing/header";

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
              <img
                src="/assets/images/github (1).png"
                alt="github"
                target="_blank"
                rel="noopener"
              />
            </a>
            <a
              className="social"
              href="https://twitter.com/254_enok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/twitter (1).png" alt="twitter" />
            </a>
            <a
              className="social"
              href="https://www.instagram.com/enok_254/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/instagram.png" alt="instagram" />
            </a>
            <a
              className="social"
              href="https://www.linkedin.com/in/enockmokua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/images/linkedin (1).png" alt="linkedin" />
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
                <textarea type="text" id="message" rows="4" cols="50">
                
                </textarea>
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
              <img
                src="/assets/images/undraw_letter_re_8m03.svg"
                alt="illustration"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;

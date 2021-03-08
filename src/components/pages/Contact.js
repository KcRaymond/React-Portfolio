import React from "react";
import { contact, section5Title, social } from "../../profile";

const Contact = () => {
  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <center>
          <div className="git-head-div">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </center>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12">
              <center>
                <h4 className="phone">| 719.321.8131 |</h4>
                <h4 className="email">
                  <a href="mailto: kaseyleigh1978@gmail.com">
                    | kaseyleigh1978@gmail.com |
                  </a>
                </h4>
                <p className="lead">{contact.pitch}</p>

                <div className="inline-block">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <br />
                  {social.resume && (
                    <a title="Download Resume" href={social.resume} download>
                      <i className="fas fa-download"></i>
                    </a>
                  )}
                </div>
                <br />
                <br />
              </center>

              {/* <form
                action={
                  contact.contactUrl
                    ? contact.contactUrl
                    : "mailto:kaseyleigh1978@gmail.com"
                }
                method={contact.contactUrl ? "POST" : "GET"}
              >
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required
                ></input>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Subject"
                  required
                ></input>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
                <button style={{ cursor: "pointer" }} type="submit">
                  <label style={{ cursor: "pointer" }} id="not-dark">
                    Send Message
                  </label>
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
      <p id="not-dark" className="Copy">
        Portfolio built with React | KC 2021 <strong></strong>
      </p>
    </div>
  );
};

export default Contact;

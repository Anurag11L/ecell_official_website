import React from "react";
import logo from "../images/ecell_logo/IIC_logo.png";
import "../styles/navbar.css";
import "../styles/global.css";
import "../styles/hover.css";
import "../styles/testimonials.css";
import "../styles/team.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="" style={{ margin: "auto", textAlign: "center" }}>
            {/* <img className="footer-logo" src="/images/ecell.png" alt="" /> */}
             <img className="footer-logo" src={logo} alt="" />
          </div>
          <div className="row footer-links">
            <div className="col-md-4">
              <div className="col-heading">About</div>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/team">Our Team</a>
                </li>
                <li>
                  <a href="/#contactus">Contact Us</a>
                </li>
                <li>
                  <button className="footer-idea-link" onclick="showForm()" style={{margin:"0"}}>
                  Submit your idea
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="col-heading">Learn More</div>
              <ul>
                <li>
                  <a href="/#acheivements">Startups</a>
                </li>
                <li>
                  <a href="/#acheivements">Achievements</a>
                </li>
                <li>
                  <a href="/#events">Events</a>
                </li>
                <li>
                  <a href="/#testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              {/* <!-- <div className="col-heading">Get In Touch</div>
              <ul>
                <li>ecell.djsce@gmail.com</li>
                <li>
                  Dwarkadas J Sanghvi,<br />
                  Gulmohar Road, J. V. P. D. Scheme,<br />
                  Vile Parle(W), Mumbai
                </li>
              </ul> --> */}
              <div className="col-heading">Social Media</div>
              <p>Follow us on social media to get the latest updates from us</p>
              <div className="footer-icons-social">
                <a
                  href="https://www.linkedin.com/company/dj-e-cell"
                  target="_blank"
                >
                  <i className="footer-social fab fa-linkedin" id="allicon"></i>
                </a>
                <a
                  href="https://www.facebook.com/djsce.ecell.7"
                  target="_blank"
                >
                  <i
                    className="footer-social fab fab fa-facebook-f fab-lg"
                    id="allicon"
                  ></i>
                </a>
                <a href="https://twitter.com/EcellD?s=12" target="_blank">
                  <i className="footer-social fab fa-twitter" id="allicon"></i>
                </a>
                <a
                  href="https://instagram.com/ecell_djsce?igshid=1osdfh57d1bsr"
                  target="_blank"
                >
                  <i className="footer-social fab fa-instagram" id="allicon"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCPJARs_4heM8fYJYU9eP4Kw"
                  target="_blank"
                >
                  <i className="footer-social fab fa-youtube" id="allicon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="all-rights container" style={{ color: "white" }}>
            © 2020 DJSCE E-Cell - All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

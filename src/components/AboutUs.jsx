import React from 'react';
import '../styles/global.css';
import '../styles/navbar.css';

const AboutUs = () => {
  return (
    <>
      <div id="aboutus" className="section-holder container">

        <h2 className="blue-text">About us</h2>

        <div className="row intro-sec" style={{ justifyContent: 'space-around' }}>
          <div className="col-md-5 intro" style={{ textAlign: 'left' }}>
            <h2>We help convert ideas to startups.</h2>
            <p>
              At IIC, we help you bring your ideas into reality. We provide 
              mentorship and guidance by providing outline of each step in
              detail for a better structured business growth. We help potential
              entrepreneurs connect with incubator centres and provide technical
              assistance and marketing advisory throughout the way.
            </p>
            <a href="/about" className="hvr-icon-forward">
              Read More 
              <i className="zmdi zmdi-arrow-right hvr-icon"></i>
            </a>
          </div>
          <div className="col-md-4">
            <div className="img-container">
              {/* Your image content goes here */}
            </div>
          </div>
        </div>
      </div>

      <div className="container counter">
        <div className="section">
          <div className="container">
            <div className="grey-text">At IIC</div>

            <div className="social-media-content">
              <h2 className="b-h1 grey counter-heading" style={{ fontWeight: 300 }}>
                We Are Growing Quickly
              </h2>
              <div className="container iconcont">
                <div className="numbers-container row">
                  <div className="col-lg-3">
                    <div className="counterholder">
                      <a href="https://instagram.com/ecell_djsce?igshid=1osdfh57d1bsr" target="_blank">
                        <i className="fab fa-instagram" id="allicon"></i>
                      </a>
                      <div className="item-animate">
                        <h2 className="counteranimation">1.15k</h2>
                      </div>

                      <a href="https://instagram.com/ecell_djsce?igshid=1osdfh57d1bsr" target="_blank">
                        <p className="social-media-text">Instagram Followers</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="counterholder">
                      <a href="https://www.facebook.com/djsce.ecell.7">
                        <i className="fab fa-facebook-f fab-lg" id="allicon"></i>
                      </a>
                      <div className="item-animate">
                        <h2 className="counteranimation">700</h2>
                      </div>

                      <a href="https://www.facebook.com/djsce.ecell.7">
                        <p className="social-media-text">Facebook Followers</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="counterholder">
                      <a href="https://www.youtube.com/channel/UCPJARs_4heM8fYJYU9eP4Kw">
                        <i className="fab fa-youtube" id="allicon"></i>
                      </a>
                      <div className="item-animate">
                        <h2 className="counteranimation">100</h2>
                      </div>

                      <a href="https://www.youtube.com/channel/UCPJARs_4heM8fYJYU9eP4Kw" target="_blank">
                        <p className="social-media-text">YouTube Subscribers</p>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="counterholder">
                      <a href="https://www.linkedin.com/company/dj-e-cell">
                        <i className="fab fa-linkedin" id="allicon"></i>
                      </a>
                      <div className="item-animate">
                        <h2 className="counteranimation">1k</h2>
                      </div>

                      <a href="https://www.linkedin.com/company/dj-e-cell" target="_blank">
                        <p className="social-media-text">LinkedIn Connections</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

import React from 'react';
import '../styles/global.css';
import '../styles/navbar.css';

const AboutUs = () => {
  return (
    <>
      <div id="aboutus" className="section-holder container" >

        <h1 className="blue-text">About us</h1>

        <div className="row intro-sec" style={{ justifyContent: 'space-around' }}>
          <div className="col-md-5 intro" style={{ textAlign: 'left' }}>
            <h2>We help convert ideas to startups.</h2>
            <p>
              At Ecell, we help you bring your ideas into reality. We provide 
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
    </>
  );
}

export default AboutUs;

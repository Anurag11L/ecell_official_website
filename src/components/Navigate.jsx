import React from 'react';
import logo from '../images/ecell_logo/ecell.png';
import '../styles/navbar.css';
import '../styles/global.css';
import '../styles/hover.css';
import '../styles/testimonials.css';

const Navigate = () => {
  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-xl navbar-dark fixed-top" style={{ margin: '20px' }}>
      <a href="/">
      {/* className="nav-link logo logo-nav navbar-brand"  */}
        <img src={logo} alt="" style={{ height: '40px', width: 'auto',marginLeft:'0' }} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-auto nav-pills" id="navitems">
            <li className="nav-item">
              <a className="nav-link hvr-underline-from-left" href="#aboutus">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-underline-from-left" href="#features">Get Started <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-underline-from-left" href="#acheivements">Achievements</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-underline-from-left" href="#events">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-underline-from-left" href="#partners-section">Partners</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-underline-from-left" href="/team">Team</a>
            </li>
          </ul>
          <span className="navbar-text">
            <a className="nav-btn hvr-icon-forward" id="get-in-touch" href="#contactus">Get in touch</a>
          </span>
        </div>
      </nav>
      
      <div className="fullscreen-video-wrap">
        <video id="vid" src="src/videos/startup.mp4" type="video/mp4"  autoPlay loop muted></video>
      </div>
      <div className="header-overlay"></div>

      {/* Hero Section */}
      <div className="v-header container" style={{zIndex:'2300'}}>
        <div className="header-content text-md-center">
          <h1>The destination of innovation, the store house of ideas</h1>
          <p className="white-text">
            We are here to provide a healthy ecosystem to make your idea happen, to make you an entrepreneur
          </p>
          <a className="btn hvr-icon-forward" href="#">
            Launch your Startup
            <i className="zmdi zmdi-arrow-right hvr-icon"></i>
          </a>
        </div>
        <div className="arrow-symbol">
          <a href="#">
            <i className="fa fa-angle-down fa-5x" style={{ color: '#fff' }}></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigate;



{/* <div className="app-container">
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="#">
             <img src={logo} alt="Logo" width="auto" height="50" />
           </a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarText">
             <ul className="navbar-nav mx-auto">
               <li className="nav-item active">
                 <a className="nav-link" href="#" >ABOUT US <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#" >GET STARTED</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">ACHIEVEMENTS</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">EVENTS</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">PARTNERS</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">TEAM</a>
               </li>
             </ul>
             <button className="btn btn-outline-danger my-2 my-lg-0 glow-on-hover">GET IN TOUCH</button>
           </div>
         </nav>
         <div class="header-overlay"></div>

         <div className="fullscreen-video-wrap">
           <video autoPlay loop muted className="fullscreen-video">
             <source src="src/videos/startup.mp4" type="video/mp4" /> 
             
           </video> */}
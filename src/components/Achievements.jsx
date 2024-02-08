import React from 'react';
import Cards from './Cards.jsx';
import '../styles/hover.css';
import '../styles/navbar.css';
import '../styles/testimonials.css';

const Achievements = () => {
  return (
    <>
        <div id="achievements">
            <div className="container section-holder">
                <h1 className="section-holder-h1">Startups</h1>
                <div className="row" id="card_display">
                    <Cards 
                        image = "src\images\cards\clofactory.png"
                        data = "The vision of Clofactory is to revolutionize the clothing industry, from the traditional retail model. Clofactory stands to deliver a seamless shirting experience with shirts that are tailored to fit and premium fabrics to go with them.The company is involved in the manufacture of other textiles."
                        pdf = "http://www.djsce.ac.in/e-cell/pdf/clofactory.pdf"
                    />
                    <Cards 
                        image = "src\images\cards\wearthreads.jpg"
                        data = "The vision of Clofactory is to revolutionize the clothing industry, from the traditional retail model. Clofactory stands to deliver a seamless shirting experience with shirts that are tailored to fit and premium fabrics to go with them.The company is involved in the manufacture of other textiles."
                        pdf = "http://www.djsce.ac.in/e-cell/pdf/clofactory.pdf"
                    />
                    <Cards 
                        image = "src\images\cards\D-webbox.jpeg"
                        data = "We inspire Dreams, build Designs, create Digitization and celebrate success. We are an agency where success isn’t defined by how much we bill or how fast we grow, but by our ability to produce exceptional work and build genuine partnerships with our clients. We keep things lean and simple."
                        pdf = "https://www.dwebbox.com/"
                    />
                </div>
            </div>
        </div>
        <div>
            <div className="container section-holder-certificates">
                <p className="certificates_head"><b>Certificates</b></p>
                    <div className="row" id="card_display">
                        <div className="col-lg-10" id="column_startup">
                    {/* <!-- <div id="column_startup"> -->
                    <!-- <div class="container"> --> */}
                        <div>
                            <img className="certificates_holder" src="src\images\certificates\Certificate.jpeg" />
                        </div>
                    {/* <!-- </div>
                <div id="column_startup"> --> */}
                        <div>
                            <img className="certificates_holder" src="src\images\certificates\IIC Certificate.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Achievements;
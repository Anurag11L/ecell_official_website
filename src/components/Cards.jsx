import React from 'react';

const Cards = ({ image, data, pdf }) => {
  return (
    <div className="col-lg-4" id="column_startup">
        <div className="container">
            <img className="startup_holder" src={image} />
              <p>{data}</p>
              <a className="hvr-icon-forward" href={pdf}>
                Read More
                <i className="zmdi zmdi-arrow-right hvr-icon"></i>
              </a>
        </div>
    </div>
  )
}

export default Cards;
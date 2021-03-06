import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';


//let myImage = require("../../images/New-York-Background.jpg");

class HomePage extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 main-content">
            <h1>Seven Shadow LLC</h1>
            <p>Financial Analysis and Application Development</p>
            <div>
              <Link to="http://morningmonte.com" className="btn btn-primary" target="_self">Morning Monte</Link> 
            </div>
            <div>
              <Link to="https://prudena.com" className="btn btn-warning" target="_self">Prudena</Link>
            </div>
            <div>
              <Link to="https://twitter.com/sevenshadow" className="btn btn-success" target="_self">Twitter</Link>
            </div>
            <div className="add-margin-top-20">
              e. <Link to="mailto:info@sevenshadow.com" target="_self">info@sevenshadow.com</Link> t. <Link to="tel:646-355-8806" target="_self">+1.646.355.8806</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
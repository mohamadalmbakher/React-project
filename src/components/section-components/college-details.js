import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
import parse from 'html-react-parser';

class CollegeDetails extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL
        let imagealt = 'image'

    return <div className="property-details-area">
      <div className="bg-gray pd-top-100 pd-bottom-90">
        <div className="container">
          <div className="row ">
            <div className="col-xl-9 col-lg-8">
              <div className="property-details-slider">
                <div className="item">
                  <div className="thumb">
                    <img src={ publicUrl+"/assets/img/colleges/medicine.jpeg"} alt={ imagealt }/>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <img src={ publicUrl+"/assets/img/colleges/medicine.jpeg" } alt={ imagealt } />
                  </div>
                </div>
              </div>
              <div className="property-details-slider-info">
                <h3>Jason Landville Apartments</h3>
               </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="widget widget-owner-info mt-lg-0 mt-5">
                <div className="contact-info">
                  <h6 className="mb-3">Contact Info</h6>
                  <div className="media">
                    <div className="media-left">
                    <i className="fa fa-map" />
                    </div>
                    <div className="media-body">
                      <p>Address</p>
                      <span>Avcilar Campus</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="media-body">
                      <p>Phone</p>
                      <span>+90 545 332 85 51</span>
                    </div>
                  </div>
                  <div className="media mb-0">
                    <div className="media-left">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="media-body">
                      <p>Email</p>
                      <span>medicine@iuc.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pd-top-90">
          <div className="col-lg-9">
            <div className="property-news-single-card style-two border-bottom-yellow">
              <h4>Base Floor Plan</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum elit magna, ut placerat nunc tempus vel. Donec vitae dictum ligula. Phasellus congue maximus eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Suspendisse sollicitudin posuere nunc et vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas aliquam vitae quam at sodales. </p>
            </div>
           
            <div className="property-news-single-card">
              <h4>College Features</h4>
              <div className="row">
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li><i className="fa fa-check" /> Attic</li>
                    <li><i className="fa fa-check" /> Poll</li>
                    <li><i className="fa fa-check" /> Concierge</li>
                    <li><i className="fa fa-check" /> Basketball Cout</li>
                    <li><i className="fa fa-check" /> Sprinklers</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li><i className="fa fa-check" /> Recreation</li>
                    <li><i className="fa fa-check" /> Front Yard</li>
                    <li><i className="fa fa-check" /> Wine Cellar</li>
                    <li><i className="fa fa-check" /> Basketball Cout</li>
                    <li><i className="fa fa-check" /> Fireplace</li>
                  </ul>
                </div>
                <div className="col-sm-4">
                  <ul className="rld-list-style mb-3 mb-sm-0">
                    <li><i className="fa fa-check" /> Balcony</li>
                    <li><i className="fa fa-check" /> Pound</li>
                    <li><i className="fa fa-check" /> Deck</li>
                    <li><i className="fa fa-check" /> 24x7 Security</li>
                    <li><i className="fa fa-check" /> Indoor Game</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        }
}

export default CollegeDetails
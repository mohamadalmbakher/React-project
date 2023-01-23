import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';

  import { Link } from 'react-router-dom';
  const axios = require('axios');

class College extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL
        let imagealt = 'image'
      /*  async function getdata() {
          var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("http://localhost:3080/api/colleges", requestOptions)
          .then(response => response.text())
          .then(result => {return result})
          .catch(error => console.log('error', error));
      }
      var axios = require('axios');

      var config = {
        method: 'get',
        url: 'http://localhost:3080/api/colleges',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      */
      let data = sectiondata.college;

    return <div className="property-area pd-top-100">
              <div className="container">
                <div className="row custom-gutter">
                  <div className="col-lg-12">
                    <div className="property-filter-menu-wrap">
                      <div className="property-filter-menu portfolio-filter text-center">
                        <button data-filter="*" className="active">All Campuses</button>
                        <button data-filter=".cat1">Avcilar campus</button>
                        <button data-filter=".cat2">Üsküdar campus</button>
                        <button data-filter=".cat3">Bayrampaşa campus</button>
                        <button data-filter=".cat4">Fatih campus</button>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="property-filter-area row custom-gutter">
                  <div className="gallery-sizer col-1" />
                   { (data.items).map( ( item, i )=>
                      <div key={ i } className={"rld-filter-item  col-lg-3 col-sm-6 "+item.cat}>
                        <div className="single-feature">
                      <div className="thumb">
                        <img src={ publicUrl+item.image } alt={ imagealt } />
                      </div>
                      <div className="details">
                       
                         <h6 className="title readeal-top"><Link to={ item.url }>{ item.title }</Link></h6>
                        
                        <ul className="contact-list">
                          <li><a className="phone" href="tel:905453328551"><i className="fa fa-phone" /></a></li>
                          <li><a className="message" href="httpsŞ//wa,me/905453328551"><i className="fa fa-comment" /></a></li>
                          <li className="readeal-top"><Link className="btn btn-yellow" to={item.url}>View Details</Link></li>
                        </ul>
                      </div>
                    </div>
                      </div>
                   ) }
                </div>
              </div>
            </div>

        }
}

export default College
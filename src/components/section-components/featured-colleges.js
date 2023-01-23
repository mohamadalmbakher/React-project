import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
 import { Link } from 'react-router-dom';

class Featured extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL
        let imagealt = 'image'
        let data = sectiondata.featuresCollege
        let Customclass = this.props.Customclass ? this.props.Customclass : 'pd-top-60'


    return <div className={"featured-area bg-gray  "+Customclass}>
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title">Featured Colleges</h2>
            </div>
            <div className="row justify-content-center">
           
              { data.items.map( ( item, i )=>
                  <div key={ i } className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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

export default Featured
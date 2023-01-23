import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';
 
class WhyChooseUs extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL
        let imagealt = 'image'
        let data = sectiondata.whychooseus


    return <div className="why-choose-us-area pd-top-70 pd-bottom-40">
          <div className="container">
            <div className="section-title">
              <h2 className="title">Why Our university</h2>
            </div>
            <div className="row justify-content-center">
             { data.items.map( ( item,i ) =>
                  <div key={ i } className={"col-xl-12 col-lg-12 col-sm-12 "}>
                    <div className="single-intro text-lg-left text-center">
                    
                      <div className="details">
                        <h4 className="title"><a href={ item.url } >{ item.title }</a></h4>
                        <p>{ item.content }</p>
                      </div>
                    </div>
                  </div>
              ) }
            </div>
          </div>
        </div>



        }
}

export default WhyChooseUs
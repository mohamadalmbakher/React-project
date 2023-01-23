import React, { Component } from 'react';
 import sectiondata from '../../data/sections.json';
 
class Banner extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL 
        let imagealt = 'image'
        let data = sectiondata.banner

        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+'/assets/img/banner.jpg)'
        }

    return <div>
              <div className="banner-area jarallax" style={ inlineStyle }>
              <div className="container">
                <div className="banner-inner-wrap">
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="banner-inner">
                        <h5 className="sub-title">{ data.title }</h5>
                        <h1 className="title">{ data.subtitle }</h1>
                        <div className="banner-btn-wrap">
                          <a className="btn btn-yellow mr-2" href={ data.btnurl }>{ data.btntxt }</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
}
export default Banner
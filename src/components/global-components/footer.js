import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footerdata from '../../data/footerdata.json';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL
        let imgattr = "Footer logo"
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+footerdata.footerbg+')'
        }

        return (
             <footer className="footer-area">
              <div className="container">
                
                <div className="footer-bottom">
                  <div className="row">
                  <div className="col-lg-3 col-sm-6">
                  <a className="footer-logo" href="#"><img src={ publicUrl+footerdata.footerlogo } alt={ imgattr } /></a>

                      </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="widget widget_nav_menu">
                        <h5 className="widget-title">{ footerdata.popularserces.title }</h5>
                        <ul>
                          { footerdata.popularserces.links.map( ( item, i )=>
                              <li className="readeal-top" key={ i }><Link to={ item.url } >{ item.title }</Link></li>
                           ) }
                          
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="widget widget_nav_menu">
                        <h5 className="widget-title">{ footerdata.Homepress.title }</h5>
                        <ul>
                          { footerdata.Homepress.links.map( ( item, i )=>
                             <li className="readeal-top" key={ i }><Link to={ item.url } >{ item.title }</Link></li>
                          ) }
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div className="widget widget_nav_menu">
                       <h5 className="widget-title">{ footerdata.quicklink.title }</h5>
                        <ul>
                         { footerdata.quicklink.links.map( ( item, i )=>
                              <li className="readeal-top" key={ i }><Link to={ item.url } >{ item.title }</Link></li>
                          ) }
                        </ul>
                      </div>
                    </div>
                   
                  </div>
                </div>
                <div className="row">
              
                  <div className="col-lg-6 col-sm-6">

                                  <div className="copy-right text-left" dangerouslySetInnerHTML={{__html: footerdata.copyrighttext}}></div>

                                  </div>
                                  <div className="col-lg-6 col-sm-6">
                  <div className="footer-social text-sm-right">
                        <span>FOLLOW US</span>
                        <ul className="social-icon">
                         { footerdata.socialicon.map( ( item, i )=>
                            <li key={i}>
                              <a href={ item.url } target="_blank"><i className={ item.icon } /></a>
                            </li>
                          ) }
                        </ul>
                      </div> 
                  </div>
                                  </div>
              </div>
            </footer>

        )
    }
}


export default Footer_v1
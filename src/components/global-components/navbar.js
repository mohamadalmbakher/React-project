import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL
        let imgattr = 'logo'
        let anchor = '#'
        return (
            <div>
                <div className="navbar-area">
                <nav className="navbar navbar-area navbar-expand-lg">
                  <div className="container nav-container">
                    <div className="responsive-mobile-menu">
                      <button className="menu toggle-btn d-block d-lg-none" data-toggle="collapse" data-target="#realdeal_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-left" />
                        <span className="icon-right" />
                      </button>
                    </div>
                    <div style={{width:"240px"}} className="logo readeal-top">
                      <Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="logo" /></Link>
                    </div>
                    <div className="nav-right-part nav-right-part-mobile">
                      <Link className="btn btn-yellow" to="/add-property">ADD LISTING <span className="right"><i className="la la-plus" /></span></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="realdeal_main_menu">
                      <ul className="navbar-nav menu-open readeal-top">
                        <li className="current-menu-item">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/Colleges">Colleges</Link>
                        </li>
                       
                            
                       
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                      </ul>
                    </div>
                    <div className="nav-right-part nav-right-part-desktop readeal-top">
                      <a className="btn btn-yellow" href='https://wa.me/905453328551' >Book Now <span className="right"><i className="la la-whatsapp" /></span></a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
        )
    }
}


export default Navbar
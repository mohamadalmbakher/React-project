import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
 import Footer from './global-components/footer';

const Contact = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact" />
        <div className="contact-area pd-top-100 pd-bottom-65">
		  <div className="container">
		    
		    <div className="row ">
		      <div className="col-xl-3 col-sm-6">
		        <div className="single-contact-info">
		          <p><i className="fa fa-phone" />Call Us:</p>
		          <h5>90 545 332 85 51</h5>
		        </div>
		      </div>
		      
		      <div className="col-xl-6 col-sm-6">
		        <div className="single-contact-info">
		          <p><i className="fa fa-envelope" />Have any Question?</p>
		          <h5>info@muhammedmubakeroglu.live</h5>
		        </div>
		      </div>
		      <div className="col-xl-3 col-sm-6">
		        <div className="single-contact-info">
		          <p><i className="fa fa-map" />Address</p>
		          <h5>Instanbul Turkey</h5>
 		        </div>
		      </div>
		    </div>
			<div className="row pd-top-92">
		      <div className="col-lg-12">
		        <div className="contact-page-map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.60596766684!2d29.01217945!3d41.0053215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1652475497407!5m2!1sen!2str"  style={{border: 0}} allowFullScreen width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 		        </div>
		      </div>
		       
		    </div>
		  </div>
		</div>
        <Footer />
    </div>
}

export default Contact


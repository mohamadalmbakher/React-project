import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Campus from './section-components/campus';
 import FeaturedColleges from './section-components/featured-colleges';
 import AnnouncementSection from './section-components/announcement';
  import WhyChooseUs from './section-components/why-choose-us';
  import Student from './section-components/student';
 import Footer from './global-components/footer';

const Home = () => {
    return <div>
        <Navbar />
        <Banner />
        <Campus />
        <FeaturedColleges />
        <div className='pb-5'>
            <div className=' container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                         <WhyChooseUs />
                    </div>
                    <div className='col-md-6'>
                        <AnnouncementSection />
                    </div>
                </div>
            </div>
        </div>
        <Student />
        <Footer />
    </div>
}
export default Home


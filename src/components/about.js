import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Mission from './section-components/mission';
import AboutUs from './section-components/about-us';
import Student from './section-components/student';
import Footer from './global-components/footer';

const About = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About" />
        <Mission />
        <AboutUs />
        <Student />
        <Footer />
    </div>
}

export default About


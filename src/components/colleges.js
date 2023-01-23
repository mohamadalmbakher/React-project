import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import CollegesSection from './section-components/college';
 import Footer from './global-components/footer';

const Colleges = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Colleges" />
        <CollegesSection />
         <Footer />
    </div>
}

export default Colleges


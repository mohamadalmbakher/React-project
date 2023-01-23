import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import CollegeDetailsSection from './section-components/college-details';
 import Footer from './global-components/footer';

const CollegeDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Colleges Details" />
        <CollegeDetailsSection />
         <Footer />
    </div>
}

export default CollegeDetails
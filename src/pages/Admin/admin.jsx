import React from 'react';
import Header from '@Components/Header/header.jsx';
import Footer from '@Components/Footer/footer.jsx';
import './styles.css';
const Admin = () => {
    return (
        <div>
            <div className="container-slider-header">
                <Header />
            </div>
            <div className="comment-block">

            </div>
            <div className="other-info">
                <Footer />
            </div>
        </div>
    );
};

export default Admin;

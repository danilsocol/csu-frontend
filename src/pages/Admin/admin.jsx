import React from 'react';
import Header from '@Components/Header/header.jsx';
import Footer from '@Components/Footer/footer.jsx';
import NewsCreater from '@Components/NewsCreater/newsCreater';
import './admin.less';
const Admin = () => {
    return (
        <div>
            <div className="container-header">
                <Header />
            </div>
            <NewsCreater/>
            <div className="other-info">
                <Footer />
            </div>
        </div>
    );
};

export default Admin;

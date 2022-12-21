import React from 'react';
import Header from '@Components/Header/header.jsx';
import Slider from '@Components/Slider/slider.jsx';
import Service from '@Components/Service/service.jsx';
import Footer from '@Components/Footer/footer.jsx';
import './styles.css';
import { STATUS, Manager } from '@Helpers/manager';

const Main = () => {
    const manager = new Manager(STATUS.DEBUG);
    const sliders = manager.slides;
    const services = manager.services;
    return (
        <div>
            <div className="container-slider-header">
                <Header />
                <Slider sliders={sliders} />
            </div>
            <div className="information-block">
                <h2 className="information-title">5 шагов к заявке</h2>
                <Service services={services} />
            </div>
            <div className="other-info">
                <Footer />
            </div>
        </div>
    );
};

export default Main;

import React from 'react';


import Header from '@Components/Header/header.jsx';
import Slider from '@Components/Slider/slider.jsx';
import './styles.css';
import { STATUS, Manager } from '@helperLogic/manager';

const Main = () => {
    const manager = new Manager(STATUS.DEBUG);
    const sliders = manager.slides;

    <div>
        <Header/>
        <Slider sliders={sliders} />
    </div>

};

export default Main;

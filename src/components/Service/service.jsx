import React from 'react';
import './service.less';

const Service = (props) => {
    const { services } = props;
    return (
        <ul className="service-block">
            {services.map((item, index) => {
                return (
                    <li key={item.id} className="service">
                        <img src={item.image} className="service-icon" />
                        <span className="service-title">{item.title}</span>
                        <span className="service-description">
                            {item.text}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
};

export default Service;

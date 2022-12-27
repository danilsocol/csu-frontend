import React from 'react';
import './header.less';
import logo from '@Assets/images/logo.png';
import phone from '@Assets/images/phone.png';

const Header = ({ setActive }) => {
    return (
        <header className="header">
            <div className="header-block">
                <nav className="menu">
                    <div className="sub-menu left-menu">
                        <img className="logo" src={logo} />
                        <div className="pipe" />
                        <span className="courier-service">
                            Курьерская служба доставки
                        </span>
                    </div>
                    <div className="sub-menu right-menu">
                        <a className="phone-link">
                            <img className="phone-img" src={phone} />
                            <span className="phone-text">
                                8 (909) 023-12-51
                            </span>
                        </a>
                        <button
                            onClick={() => setActive(true)}
                            className="log-in-btn"
                        >
                            Вход
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

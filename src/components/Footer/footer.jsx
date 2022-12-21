import React from 'react';
import './footer.less';
import logo from '@Assets/images/logo.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-block">
                <img src={logo} className="logo" />
                <ol className="">
                    <li className="data-block">
                        <ul>
                            <li>
                                <a href="#">О компании</a>
                            </li>
                            <li>
                                <a href="#">Вакансии</a>
                            </li>
                            <li>
                                <a href="#">Клиенту</a>
                            </li>
                            <li>
                                <a href="#">Франчайзинг</a>
                            </li>
                        </ul>
                    </li>

                    <li className="data-block">
                        <ul>
                            <li>
                                <a href="#">Доставка из Китая</a>
                            </li>
                            <li>
                                <a href="#">Все услуги</a>
                            </li>
                            <li>
                                <a href="#">Акции</a>
                            </li>
                        </ul>
                    </li>
                </ol>
                <div className="extreme-block">
                    <span className="another-text">
                        manager@uexpress.ru
                        <br />
                        <br />
                        115221, г. Челябинск, ул.
                        <br />
                        Северная, д. 29-в
                        <br />
                        <br />
                        Мы работаем по 24 часа
                        <br />
                        5 дней в неделю
                        <br />
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

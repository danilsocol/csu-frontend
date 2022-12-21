import React from 'react';
import Header from '@Components/Header/header.jsx';
import Footer from '@Components/Footer/footer.jsx';
import img from '@Assets/images/iconImage.jpg';
import './admin.less';
const Admin = () => {
    return (
        <div>
            <div className="container-slider-header">
                <Header />
            </div>
            <div className="comment-block">
                <div className="container-comment-title">
                    <h1 className="comment-title">Добавить новость</h1>
                </div>
                <div className="container-comment-description">
                    <span className="comment-description">
                        Введите текст новости, а также приложите изображение
                        (размер: 270х270px)
                    </span>
                </div>

                <textarea
                    className="text-area"
                    placeholder="Введите текст новости"
                ></textarea>
                <div className="container-add-img">
                    <a>
                        <img className="add-img" src={img} />
                        <span className="add-text">+ Добавить изображение</span>
                    </a>
                </div>
                <button className="post-btn">Применить</button>
            </div>
            <div className="other-info">
                <Footer />
            </div>
        </div>
    );
};

export default Admin;

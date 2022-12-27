import React from 'react';
import closeBtn from '@Assets/images/closeBtn.jpg';
import './authModal.less';

const AuthModal = ({ active, setActive }) => {
    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <form
                    method="post"
                    className="message-box"
                    onSubmit={(e) => {
                        e.preventDefault();
                        return false;
                    }}
                >
                    <img
                        src={closeBtn}
                        className="close-btn"
                        onClick={() => setActive(false)}
                    />

                    <h1 className="form-title">Авторизация</h1>
                    <span className="form-description">
                        Введите логин и пароль, чтобы войти в личный кабинет
                    </span>

                    <input
                        type="email"
                        className="form-input email-input"
                        placeholder="Логин"
                    />

                    <input
                        type="password"
                        minLength="3"
                        className="form-input password-input"
                        placeholder="Пароль"
                    />

                    <button className="submit-btn">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default AuthModal;

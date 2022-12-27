import React, { useState } from 'react';
import imgAdd from '@Assets/images/iconImage.jpg';
import closeBtn from '@Assets/images/closeBtn.jpg';
import './newsCreater.less';

const NewsCreater = () => {
    const [img, setImg] = useState(false);
    const [text, setText] = useState(false);
    function addImg(e) {
        setImg(URL.createObjectURL(e.target.files[0]));
        setText(e.target.files[0].name);
    }
    function deleteImg() {
        setImg(false);
        setText(false);
    }
    return (
        <div className="comment-block">
            <form
                method="post"
                className="message-box"
                onSubmit={(e) => {
                    e.preventDefault();
                    return false;
                }}
            >
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
                    <label className="input-file">
                        <input type="file" onChange={addImg} />
                        <img className="add-img" src={imgAdd} />
                        <span className="add-text">+ Добавить изображение</span>
                    </label>

                    <img
                        className={
                            img == false ? 'added-img-null' : 'added-img'
                        }
                        src={img}
                    />
                    <span className="added-text">{text} </span>
                    <img
                        src={closeBtn}
                        className={
                            img == false ? 'close-btn-null' : 'close-btn'
                        }
                        onClick={() => deleteImg()}
                    />
                </div>
                <button className="post-btn">Применить</button>
            </form>
        </div>
    );
};

export default NewsCreater;

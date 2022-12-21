export default class Slide {
    _id;
    _title;
    _text;
    _image;
    constructor(id, title, text, image) {
        this._id = id;
        this._title = title;
        this._text = text;
        this._image = image;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get text() {
        return this._text;
    }

    get image() {
        return this._image;
    }
}

import Data from '@Helpers/staticData.jsx';

export class Manager {
    _mode;
    constructor(mode) {
        this._mode = mode;
    }

    get slides() {
        if (this._mode === STATUS.DEBUG) {
            return Data.slides();
        } else {
            return Data.slides();
        }
    }
    get services() {
        if (this._mode === STATUS.DEBUG) {
            return Data.services();
        } else {
            return Data.services();
        }
    }

}
export const STATUS = {
    DEBUG: 'debug',
    RELEASE: 'release',
};

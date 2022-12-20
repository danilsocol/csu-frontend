import Data from '@helperLogic/staticData.jsx';

export class Manager {
    _mode;
    constructor(mode) {
        this._mode = mode;
    }

    get slides() {
        if (this._mode === API_STATUS.DEBUG) {
            return Data.slides();
        } else {
            return Data.slides();
        }
    }
}
export const STATUS = {
    DEBUG: 'debug',
    RELEASE: 'release',
};
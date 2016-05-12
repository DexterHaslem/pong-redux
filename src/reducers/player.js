/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import {Constants} from '../Constants';

let getDefaultPlayerState = () => {
    return {
        x: Constants.PADDLE_WIDTH,
        y: 10
    };
};

export const player = function(state = getDefaultPlayerState(), action) {
    switch (action.type) {
        case Constants.MOUSEMOVE:
            return {
                //...state,
                x: action.data.clientX,
                y: action.data.clientY
            };
        default:
            return state;
    }
};
export default player;
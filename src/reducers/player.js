/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import { Constants } from '../Constants';
import Immutable from 'immutable';
import * as R from 'ramda';

let getDefaultPlayerState = () => {
    return Immutable.Map({
        x: Constants.PADDLE_WIDTH,
        y: 10
    });
};

export const player = function(state = getDefaultPlayerState(), action) {
    switch (action.type) {
        case Constants.MOUSEMOVE:
            return Immutable.Map({
                //...state,
                x: action.data.clientX,
                y: action.data.clientY
            });
        default:
            return state;
    }
};
export default player;
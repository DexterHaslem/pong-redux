/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import {Constants} from '../Constants';
import Immutable from 'immutable';
import * as R from 'ramda';

let getDefaultGameState = () => {
    return Immutable.Map({
        playerScore: 0,
        cpuScore: 0,
        message: ''
    });
};

export const game = function(state = getDefaultGameState(), action) {
    switch (action.type) {
        case Constants.GAME_TICK:
            return Immutable.Map({

            });

    }
    return state;
};

export default game;
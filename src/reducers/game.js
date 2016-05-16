/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import {Constants} from '../Constants';
import Immutable from 'immutable';
import * as R from 'ramda';

let getDefaultGameState = () => {
    return Immutable.Map({
        //ticks: 0,
        playerScore: 0,
        cpuScore: 0
    });
};

export const game = function(state = getDefaultGameState(), action) {
    let interim = Immutable.Map({
        playerScore: 0,
        cpuScore: 0
    });
    switch (action.type) {
        case Constants.GAME_TICK:
            // TODO:
            break;

    }
    return interim;
};

export default game;
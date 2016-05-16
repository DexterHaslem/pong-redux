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
        cpuScore: 0,

        message: '',
        messageTicks: 0
    });
};

export const game = function(state = getDefaultGameState(), action) {

    switch (action.type) {
        case Constants.CPU_SCORE:
            return state.merge({
               cpuScore: state.get('cpuScore') + 1
            });
            break;

        case Constants.PLAYER_SCORE:
            return state.merge({
                playerScore: state.get('playerScore') + 1
            });
            break;

    }
    return state;
};

export default game;
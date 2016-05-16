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

const messageTickLength = Constants.GAME_TICK_MS; // we are 30fps, so show for 1 second

export const game = function(state = getDefaultGameState(), action) {

    switch (action.type) {
        case Constants.CPU_SCORE:
            return state.merge({
                cpuScore: state.get('cpuScore') + 1,
                message: "CPU scores!",
                messageTicks: messageTickLength
            });
            break;

        case Constants.PLAYER_SCORE:
            return state.merge({
                playerScore: state.get('playerScore') + 1,
                message: "player scores!",
                messageTicks: messageTickLength
            });
            break;
        case Constants.GAME_TICK:
            let msg = state.get('message');
            let ticks = state.get('messageTicks');
            if (msg === '' || ticks === 0) {
                return state;
            }
            ticks -= 1;
            if (ticks <= 0) {
                ticks = 0;
                msg = '';
            }
            return state.merge({
                message: msg,
                messageTicks: ticks
            });
    }
    return state;
};

export default game;
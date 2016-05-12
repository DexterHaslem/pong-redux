/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import {Constants} from '../Constants';


let getDefaultGameState = () => {
    return {
        playerScore: 0,
        cpuScore: 0,

        ballSpeed: 50,
        ballDirection: Constants.Direction.Left
    }
};

export const game = function(state = getDefaultGameState, action) {
    switch (action.type) {

    }
    return state;
};

export default game;
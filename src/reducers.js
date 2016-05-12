"use strict";

import {Constants} from './Constants';

let getDefaultPlayerState = () => {
    return {
        x: Constants.PADDLE_WIDTH,
        y: 10
    };
};

let getDefaultCpuState = () => {
    return {
        x: Constants.WIDTH - Constants.PADDLE_WIDTH,
        y: 10
    };
};

let getDefaultGameState = () => {
    return {
        playerScore: 0,
        cpuScore: 0,

        ballSpeed: 50,
        ballDirection: Constants.Left,
    }
}

export const player = function(state = getDefaultPlayerState(), action) {
    switch (action.type) {
        case Constants.MOUSEMOVE:
            let newState = {
                //...state,
                x: action.data.clientX,
                y: action.data.clientY
            }
            return newState;
        default:
            return state;
    }
};

export const game = function(state = getDefaultGameState, action) {
    switch (action.type) {

    }
    return state;
};

export const cpu = function(state = getDefaultCpuState, action) {
    switch (action.type) {

    }
    return state;
};

export default game;
/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import {Constants} from '../Constants';
import Immutable from 'immutable';
import Ball from './ball';
import Player from './player';

import * as R from 'ramda';

// this kind of sucks: everything that needs to know where the ball is
// needs to be in same reducer, or custom reducer combine but im too lazy to do that
// and this game needs to know where both player and cpu is

// what i did was register only game toplevel
// it handles the chunks itself
let getDefaultGameState = () => {
    return Immutable.Map({
        ball: Ball.getDefault(),
        player: Player.getDefaultPlayerState(),
        //ticks: 0,
        playerScore: 0,
        cpuScore: 0,
        message: '',
        
        cpu_x: Constants.WIDTH - Constants.PADDLE_WIDTH - Constants.EDGE_PAD,
        cpu_y: Constants.EDGE_PAD,
    });
};

export const game = function(state = getDefaultGameState(), action) {
    // first pass state to ball and player
    let ball_state = Ball.reducer(state.get('ball'), action);
    let player_state = Player.reducer(state.get('player'), action);
    let interim = Immutable.Map({
        ball: ball_state,
        player: player_state,
        playerScore: 0,
        cpuScore: 0,
        cpu_x: state.get('cpu_x'),
        cpu_y: state.get('cpu_y')
    });
    switch (action.type) {
        case Constants.GAME_TICK:
            // TODO:
            break;

    }
    return interim;
};

export default game;
/**
 * Created by Dexter on 5/15/2016.
 */
"use strict";

import {Constants} from '../Constants';
import Immutable from 'immutable';
import * as R from 'ramda';

let getDefault = () => {
    return Immutable.Map({
        x: Constants.WIDTH - Constants.PADDLE_WIDTH - Constants.EDGE_PAD,
        y: Constants.EDGE_PAD,
        direction: Constants.Direction.Up
    });
};

// only do these once to emulate a random 'difficulty'.
// player max speed is 10. allow us to get slightly faster
const maxSpeed = 16;
const speed = Math.round(Math.max(8, Math.random() * maxSpeed));
const sensitivity = Math.round(Math.max(2, Math.random() * 6));

export const cpu = (state = getDefault(), action) => {
    switch (action.type) {
        case Constants.CPU_UPDATE:
            // hey we've been asked to update! lets see where the ball is
            let ball = action.ball;

            // simple ai, try to move middle of paddle to ball x/y

            const ballY = ball.get('y') - (Constants.BALL_SIZE / 2);
            const topLimit = 2;
            const bottomLimit = Constants.HEIGHT - Constants.PADDLE_HEIGHT - 2;

            let y = state.get('y');
            let mid = y + Constants.PADDLE_HEIGHT / 2;
            let delta = Math.abs(ballY - mid);

            // prevent 'vibrating' on straight lines
            if (delta < sensitivity) {
                return state;
            }

            // if our delta is less than our speed,
            // set speed to delta so we dont vibrate back and forth
            const adjustedSpeed = delta < speed ? delta : speed;

            if (mid < ballY) {
                y = Math.min(y + adjustedSpeed, bottomLimit);
            } else {
                y = Math.max(y - adjustedSpeed, topLimit);
            }
            // but simulate the same max move speed player has
            return state.merge({
                y: y
            });
        default:
            return state;
    }

};

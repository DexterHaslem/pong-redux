/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import {Constants} from '../Constants';
import Immutable from 'immutable';
import * as R from 'ramda';

function getDefault() {
    return Immutable.Map({
        speed: 10,
        diameter: 15,
        angle: 0,
        direction: Constants.Direction.Left,
        x: Constants.WIDTH / 2,
        y: Constants.HEIGHT / 2,
        ticks: 0
    });
}

function getRandomAngle() {
    // when we are deflected add some random angle
    // to our movement vector
    // an angle of 0 goes straight left/right.
    // negative angle goes up towards 0 on y
    // positive towards bottom of screen, keep same
    // coordinate system
    let ang = Math.random() * 10;
    let negative = Math.round(Math.random()) > 0;
    return negative ? -ang : ang;
}

export const ball = (state = getDefault(), action) => {
    switch (action.type) {
        case Constants.GAME_TICK:
            let x = state.get('x');
            let dir = state.get('direction');
            let speed = state.get('speed');
            let isLeft = dir === Constants.Direction.Left;
            let newX = x + (isLeft ? -speed : speed);
            let rightEdge = Constants.WIDTH - state.get('diameter');

            if (newX < 1 && isLeft) {
                isLeft = false;
                newX = 1;
            }
            else if (newX >= rightEdge) {
                isLeft = true;
                newX = rightEdge;
            }
            // TODO: handle angle and convert direction to a vector
            
            return state.merge({
                x: newX,
                direction: isLeft ? Constants.Direction.Left : Constants.Direction.Right,
                //ticks: state.get('ticks') + 1
            });
        case Constants.RESET_BALL:
            // TODO: random direction + angle
            return getDefault();
        case Constants.BALL_DEFLECTED:
            // something we're unaware of hit us (paddle)
            return state.merge({
                // just swithc current direction
                //direction: action.newDirection,
                direction: state.get('direction') == Constants.Direction.Left ?
                    Constants.Direction.Right :
                    Constants.Direction.Left,
                angle: getRandomAngle()
            });
    }
    return state;
};
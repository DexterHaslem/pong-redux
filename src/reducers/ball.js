/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import {Constants} from '../Constants';
import Immutable from 'immutable';
import * as R from 'ramda';

let getDefaultBallState = () => {
    return Immutable.Map({
        speed: 10,
        diameter: 15,
        direction: Constants.Direction.Left,
        x: Constants.WIDTH / 2,
        y: Constants.HEIGHT / 2,
        ticks: 0,
    });
};

export const ball = function(state = getDefaultBallState(), action) {
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
            return state.merge({
                x: newX,
                direction: isLeft ? Constants.Direction.Left : Constants.Direction.Right,
                ticks: state.get('ticks') + 1
            });

    }
    return state;
};

export default ball;
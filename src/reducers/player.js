/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import { Constants } from '../Constants';
import Immutable from 'immutable';
import * as R from 'ramda';

let getDefaultPlayerState = () => {
    return Immutable.Map({
        x: Constants.EDGE_PAD,
        y: Constants.WIDTH / 2,
        direction: Constants.Direction.Down,
        lastMouseY: Constants.WIDTH / 2
    });
};

export const player = (state = getDefaultPlayerState(), action) => {
    switch (action.type) {
        case Constants.MOUSEMOVE:
            // used to do everything in both events, but that caused
            // double update rate when wiggling mouse around
            return state.merge({
                lastMouseY: action.data.clientY
            });
            break;

        case Constants.GAME_TICK: // on game tick , drift to last mousePos
            // our X,Y is top left of paddle. handle clips
            // if the mouse is above paddle center, we want to go up
            // RIP mouse code, make sure to update delta, direction, we continue to move on tick
            let y = state.get('y');
            let mid = y + Constants.PADDLE_HEIGHT / 2;
            let mouseY =   state.get('lastMouseY');// action.data && action.data.clientY ? action.data.clientY : state.get('lastMouseY');
            let delta = Math.abs(mouseY - mid);
            let bottomClip = Constants.HEIGHT - Constants.PADDLE_HEIGHT;

            if (delta <= 2) {
                return state;
            }

            // 'below' is visually here
            let belowMid = mouseY > mid;
            let adjustedDelta = Math.min(10, delta); // max delta
            let direction = belowMid ? Constants.Direction.Down : Constants.Direction.Up;

            //y = Math.max(0, Math.min(Constants.HEIGHT, belowMid ? y + adjustedDelta : y - adjustedDelta) - Constants.PADDLE_HEIGHT);
            if (direction === Constants.Direction.Down) {
                y += adjustedDelta;

                if (y >= bottomClip) {
                    adjustedDelta = 0;
                    y = bottomClip;
                }
            }
            else {
                y -= adjustedDelta;
                if (y <= 2) {
                    y = 2;
                    adjustedDelta = 0;
                }
            }

            return state.merge({
                y: y,
                direction: direction,
                lastMouseY: mouseY
            });
        default:
            return state;
    }
};
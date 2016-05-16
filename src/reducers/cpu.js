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
        y: Constants.EDGE_PAD
    });
};

export const cpu = (state = getDefault(), action) => {
    return state;
};

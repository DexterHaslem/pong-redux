/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import {Constants} from '../Constants';
import Immutable from 'immutable';
import * as R from 'ramda';

let getDefaultCpuState = () => {
    return Immutable.Map({
        x: Constants.WIDTH - Constants.PADDLE_WIDTH,
        y: 10
    });
};

export const cpu = function(state = getDefaultCpuState(), action) {
    switch (action.type) {

    }
    return state;
};

export default cpu;
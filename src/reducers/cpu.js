/**
 * Created by Dexter on 5/11/2016.
 */

"use strict";

import {Constants} from '../Constants';

let getDefaultCpuState = () => {
    return {
        x: Constants.WIDTH - Constants.PADDLE_WIDTH,
        y: 10
    };
};

export const cpu = function(state = getDefaultCpuState, action) {
    switch (action.type) {

    }
    return state;
};

export default cpu;
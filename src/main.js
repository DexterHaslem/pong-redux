"use strict";

import { createStore, combineReducers } from "redux";
import { Draw } from "./draw";
import { Actions } from "./actions";
import { Constants } from './Constants';
import { game } from './reducers/game';
let canvas = document.getElementById("canvas");
canvas.width = Constants.WIDTH;
canvas.height = Constants.HEIGHT;
//console.log(cpu);
let gameStore = createStore(game);
let actions = new Actions(gameStore, canvas);
let draw = new Draw(canvas.getContext("2d"));

gameStore.subscribe(function() {
    draw.update(gameStore.getState());
});

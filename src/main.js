"use strict";

import { createStore, combineReducers } from "redux";
import { Draw } from "./draw";
import { Actions } from "./actions";

import { game, cpu, player }  from "./reducers";

let canvas = document.getElementById("canvas");

let gameStore = createStore(combineReducers({ game, cpu, player }));
let actions = new Actions(gameStore, canvas);

let draw = new Draw(canvas.getContext("2d"));

gameStore.subscribe(function() {
    draw.update(gameStore.getState());
});

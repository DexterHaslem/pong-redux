"use strict";

import { createStore, combineReducers } from "redux";

import { PlayerActions } from "./actions/PlayerActions";
import { GameActions } from "./actions/GameActions";
import { Constants } from './Constants';

import { game } from './reducers/game';
import { ball } from './reducers/ball';
import { player } from './reducers/player';
import { cpu } from './reducers/cpu';

let canvas = document.getElementById("canvas");
canvas.width = Constants.WIDTH;
canvas.height = Constants.HEIGHT;

let gameStore = createStore(combineReducers({
    game: game,
    ball: ball,
    player: player,
    cpu: cpu
}));

let playerActions = new PlayerActions(gameStore);
//let ctx = canvas.getContext("2d");
//let unsubscribe = gameStore.subscribe(() => Draw.update(ctx, gameStore.getState()));
// we will let game actions handle redrawing directly since it's driving game loop
let gameActions = new GameActions(gameStore, canvas.getContext("2d"));

playerActions.subscribeEvents(canvas);

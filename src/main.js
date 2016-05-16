"use strict";

import { createStore, combineReducers } from "redux";
import { Draw } from "./draw";
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
let gameActions = new GameActions(gameStore);

playerActions.subscribeEvents(canvas);

let ctx = canvas.getContext("2d");
let unsubscribe = gameStore.subscribe(() => Draw.update(ctx, gameStore.getState()));

/**
 * Created by Dexter on 5/15/2016.
 */

import { Constants } from "../constants";

export class GameActions  {
    constructor(store) {
        this._store = store;
        this.tickToken = setInterval(() => {
            this.gameTick();
        }, Constants.GAME_TICK_MS);
    }

    gameTick() {
        // first get latest gamestate
        this._store.dispatch({ type: Constants.GAME_TICK });
        let state = this._store.getState();

        // all non player driven actions need to be here:
        // cpu movement
        // game state
        // (ball movement is handled automatically)
        
        // so now lets check gamestate
    }
}
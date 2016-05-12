/**
 * Created by Dexter on 5/11/2016.
 */


import { Constants } from "./constants";

export class Actions {

    constructor(store, canvas) {
        this._store = store;
        // not sure how or why, but 'this' ends up as WINDOW in game tick.
        // seems like a transpile bug or setInterval binding by default.
        // same thing happens with canvas handlers
        let self = this;
        
        // hook up all the events we care about to generate actions from
        // :(
        document.addEventListener('keydown', this.onKeyDown.bind(self));
        //canvas.onkeydown = this.onKeyDown.bind(self);
        canvas.onclick = this.onClick.bind(self);
        canvas.onmousemove = this.onMouseMove.bind(self);
        
        this.tickToken = setInterval(function() {
            self.gameTick();
        }, Constants.GAME_TICK_MS);
    }

    onKeyDown(evt) {
        this._store.dispatch({
            type: Constants.KEYDOWN,
            data: evt
        })
    }

    onClick(evt) {
        this._store.dispatch({
            type: Constants.CLICK,
            data: evt
        })
    }

    onMouseMove(evt) {
        this._store.dispatch({
            type: Constants.MOUSEMOVE,
            data: evt
        })
    }

    gameTick() {
        if (!this._store) {
            clearInterval(this.tickToken);
            return;
        }
        this._store.dispatch({
            type: Constants.GAME_TICK
        });
    }
}
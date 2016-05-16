/**
 * Created by Dexter on 5/15/2016.
 */

import { Constants } from "../constants";
import { Draw } from "../draw";

export class GameActions  {
    constructor(store, drawCtx) {
        this._store = store;
        this._ctx = drawCtx;
        this.tickToken = setInterval(() => {
            this.gameTick();
        }, Constants.GAME_TICK_MS);
    }

    playerScored(state) {
        return (state.ball.get('x') + Constants.BALL_SIZE) > Constants.WIDTH - (Constants.PADDLE_WIDTH / 2) - Constants.EDGE_PAD;
    }

    CPUScored(state) {
        return state.ball.get('x') < ((Constants.PADDLE_WIDTH / 2) + Constants.EDGE_PAD);
    }

    ballDeflected(state) {
        // check ball was hit by player/cpu paddle and return new direction if so
        let ballY = state.ball.get('y');
        let playerY = state.player.get('y');
        let cpuY = state.cpu.get('y');
        if (((state.ball.get('x') + Constants.BALL_SIZE) >= Constants.WIDTH - (Constants.PADDLE_WIDTH) - Constants.EDGE_PAD)
            && (ballY >= cpuY && ballY <= cpuY + Constants.PADDLE_HEIGHT)) {
            // deflected by cpu
            return true;
        }

        if (((state.ball.get('x')) <= Constants.PADDLE_WIDTH - Constants.EDGE_PAD)
            && (ballY >= playerY && ballY <= playerY + Constants.PADDLE_HEIGHT)) {
            // deflected by player
            return true;
        }

        return false
    }

    gameTick() {
        // first get latest gamestate
        this._store.dispatch({ type: Constants.GAME_TICK });
        let state = this._store.getState();

        // this seems ghetto, fwd ball state to cpu ai to see what it does.
        this._store.dispatch({
            type: Constants.CPU_UPDATE,
            ball: state.ball
        });

        // all non player driven actions need to be here:
        // cpu movement
        // game state
        // (ball movement is handled automatically)
        
        // so now lets check gamestate!

        if (!this.ballDeflected(state)) {
            if (this.playerScored(state)) {
                this._store.dispatch({type: Constants.PLAYER_SCORE});
                this._store.dispatch({type: Constants.RESET_BALL});
            }
            else if (this.CPUScored(state)) {
                this._store.dispatch({type: Constants.CPU_SCORE});
                this._store.dispatch({type: Constants.RESET_BALL});
            }

            if (this._ctx) {
                // draw *latest* state, not one that just drove gameplay decisions
                Draw.update(this._ctx, this._store.getState());
            }
        } else {
            this._store.dispatch({
                type: Constants.BALL_DEFLECTED
                //newDirection: deflected
            });
        }
    }
}
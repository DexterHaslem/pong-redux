/**
 * Created by Dexter on 5/11/2016.
 */
import {Constants} from "./constants";

export class Draw {
    constructor(ctx) {
        this.ctx = ctx;
    }

    update(state) {
        let ctx = this.ctx;
        ctx.font = "20px Georgia";
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, Constants.WIDTH, Constants.HEIGHT);

        ctx.fillStyle = "white";
        ctx.font = "12px Verdana";
        ctx.fillStyle = "white";
        ctx.fillText("pong: " + state.player.x, Constants.WIDTH / 2 - 50, 25);//JSON.stringify(state), 10, 25);
    }
}
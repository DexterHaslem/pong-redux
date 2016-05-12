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
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, Constants.WIDTH, Constants.HEIGHT);
        ctx.fillStyle = "black";
        ctx.font = "20px Verdana";
// Create gradient
        var gradient = ctx.createLinearGradient(0, 0, Constants.WIDTH, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
// Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillText(JSON.stringify(state), 10, 25);
    }
}
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
        let halfWidth = Constants.WIDTH / 2;

        ctx.font = "20px Georgia";
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, Constants.WIDTH, Constants.HEIGHT);

        ctx.setLineDash([5, 10]);
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(halfWidth, 0);
        ctx.lineTo(halfWidth, Constants.HEIGHT);
        ctx.stroke();

        ctx.fillStyle = "white";
        ctx.font = "12px Verdana";
        ctx.fillStyle = "white";
        ctx.fillText("redux pong", halfWidth - 25, 25);//JSON.stringify(state), 10, 25);

        ctx.fillRect(state.ball.get('x'), state.ball.get('y'), state.ball.get('diameter'), state.ball.get('diameter'));

        ctx.fillRect(state.player.get('x'), state.player.get('y'), Constants.PADDLE_WIDTH, Constants.PADDLE_HEIGHT);
    }
}
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
        //let playerY = state.player.get('y');
        ctx.fillText("redux pong", halfWidth - 25, 25);//JSON.stringify(state), 10, 25);

        let player = state.get('player');
        let ball = state.get('ball');

        ctx.fillText("Player: " + state.get('playerScore'), 5, Constants.HEIGHT - 25);//JSON.stringify(state), 10, 25);
        ctx.fillText("CPU: " + state.get('playerScore'), Constants.WIDTH - 50, Constants.HEIGHT - 25);//JSON.stringify(state), 10, 25);
        ctx.fillRect(ball.get('x'), ball.get('y'), ball.get('diameter'), ball.get('diameter'));

        ctx.fillRect(player.get('x'), player.get('y'), Constants.PADDLE_WIDTH, Constants.PADDLE_HEIGHT);
        ctx.fillRect(state.get('cpu_x'), state.get('cpu_y'), Constants.PADDLE_WIDTH, Constants.PADDLE_HEIGHT);
    }
}
/**
 * Created by Dexter on 5/11/2016.
 */
import {Constants} from "./constants";
import * as R from 'ramda';

export class Draw {
    static update(ctx, state) {
        ctx.fillStyle = "black";

        ctx.fillRect(0, 0, Constants.WIDTH, Constants.HEIGHT);

        var halfWidth = Constants.WIDTH / 2;

        Draw.drawMidline(ctx, halfWidth);

        Draw.drawScores(ctx, state.game, halfWidth);

        Draw.drawBall(ctx, state.ball);

        Draw.drawBats(ctx, state);
    }

    static drawBall(ctx, ball) {
        ctx.fillStyle = "white";
        ctx.fillRect(ball.get('x'), ball.get('y'), Constants.BALL_SIZE, Constants.BALL_SIZE);
    }

    static drawScores(ctx, state, halfWidth) {
        ctx.fillStyle = "white";
        ctx.font = "14px Verdana";

        ctx.fillText("redux pong", halfWidth - 25, 15);//JSON.stringify(state), 10, 25);
        ctx.fillText("Player: " + state.get('playerScore'), 5, Constants.HEIGHT - 10);//JSON.stringify(state), 10, 25);
        ctx.fillText("CPU: " + state.get('cpuScore'), Constants.WIDTH - 100, Constants.HEIGHT - 10);//JSON.stringify(state), 10, 25);

        let msg = state.get('message');
        if (msg != '') {
            ctx.font = "16px Verdana";
            ctx.fillStyle = "rgb(184,55,111)";
            ctx.fillText(msg, halfWidth - 25, 285);
        }
    }

    static drawBats(ctx, state) {
        ctx.fillStyle = "white";
        R.map((s) => {
            ctx.fillRect(s.get('x'), s.get('y'), Constants.PADDLE_WIDTH, Constants.PADDLE_HEIGHT);
        }, [state.player, state.cpu]);
    }
 
    static drawMidline(ctx, halfWidth) {
        ctx.setLineDash([5, 10]);
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(halfWidth, 0);
        ctx.lineTo(halfWidth, Constants.HEIGHT);
        ctx.stroke();
    }
}
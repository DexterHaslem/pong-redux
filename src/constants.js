export const Constants = {
    GAME_TICK: "_gameTick",

    GAME_TICK_MS: 33, // 16.6 60fps

    CLICK: "_click",//Symbol("CLICK"),
    MOUSEMOVE: "_moouseMove", // Symbol("mouseMOve"),
    KEYDOWN: "_keydown", //Symbol("keyDown"),

    Direction: {
        Left: "_left",
        Right: "_right",
        Up: "_up",
        Down: "_down"
    },

    WIDTH: 800,
    HEIGHT: 600,
    PADDLE_WIDTH: 20,
    PADDLE_HEIGHT: 100,
    EDGE_PAD: 4,
    BALL_SIZE: 14,

    PLAYER_SCORE: "_playerScore",
    CPU_SCORE: "_CPUScore",
    RESET_BALL: "_resetBall",
    BALL_DEFLECTED: "_ballDeflected",
    CPU_UPDATE: "_cpuUpdate",
    SET_GAME_MESSAGE: "_setGameMessage"
};

export default Constants;

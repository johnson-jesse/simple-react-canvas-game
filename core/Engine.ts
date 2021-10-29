export interface Operator {
    pause(): void;
    restart(): void;
}

const Engine = (context: CanvasRenderingContext2D): Operator => {
    const ctx2d = context;
    // some game state
    // some game functions

    REPLACE_ME_WITH_COOL_GAME_LOGIC: {
        ctx2d.fillStyle = 'green';
        ctx2d.fillRect(10, 10, 150, 100);
    }

    return {
        pause: () => {},
        restart: () => {}
    };
}

export default Engine;
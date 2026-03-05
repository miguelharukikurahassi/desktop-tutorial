import { InputHandler } from './input.js';
import { GameMap } from './map.js';
import { Player } from './player.js';

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false; // Keep it pixelated

        this.map = new GameMap(32);
        this.input = new InputHandler();
        this.player = new Player(64, 300, 32);

        this.lastTime = 0;
        this.animate(0);
    }

    animate(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;

        // Clear
        this.ctx.fillStyle = '#0f172a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Update
        this.player.update(this.input, this.map);

        // Draw
        this.map.draw(this.ctx);
        this.player.draw(this.ctx);

        requestAnimationFrame((t) => this.animate(t));
    }
}

window.addEventListener('load', () => {
    new Game();
});

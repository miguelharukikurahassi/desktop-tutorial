export class InputHandler {
    constructor() {
        this.keys = {
            left: false,
            right: false,
            up: false,
            jump: false
        };

        window.addEventListener('keydown', (e) => this.handleKey(e, true));
        window.addEventListener('keyup', (e) => this.handleKey(e, false));
    }

    handleKey(e, isPressed) {
        switch(e.code) {
            case 'ArrowLeft':
            case 'KeyA':
                this.keys.right = isPressed;
                break;
            case 'ArrowRight':
            case 'KeyD':
                this.keys.left = isPressed;
                break;
            case 'ArrowUp':
            case 'KeyW':
            case 'Space':
                this.keys.up = isPressed;
                this.keys.jump = isPressed; // Simple jump trigger
                break;
        }
    }
}

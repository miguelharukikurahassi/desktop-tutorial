export class Player {
    constructor(x, y, tileSize) {
        this.x = x;
        this.y = y;
        this.width = 30; // Slightly smaller than tile for better feel
        this.height = 32;
        this.vx = 0;
        this.vy = 0;
        this.speed = 4;
        this.jumpForce = -10;
        this.gravity = 0.5;
        this.onGround = false;
        this.tileSize = tileSize;

        this.sprite = new Image();
        this.sprite.src = './assets/sprites/hero.png';

        // Animation variables
        this.frame = 0;
        this.frameCounter = 0;
        this.facing = 1; // 1 for Right, -1 for Left
    }

    update(input, map) {
        // Horizontal Movement
        if (input.keys.left) {
            this.vx = -this.speed;
            this.facing = -1;
        } else if (input.keys.right) {
            this.vx = this.speed;
            this.facing = 1;
        } else {
            this.vx = 0;
        }

        // Jumping
        if (input.keys.jump && this.onGround) {
            this.vy = this.jumpForce;
            this.onGround = false;
        }

        // Apply Gravity
        this.vy += this.gravity;

        // Collision X
        this.x += this.vx;
        this.handleMapCollision(map, 'x');

        // Collision Y
        this.y += this.vy;
        this.handleMapCollision(map, 'y');

        // Animation logic
        if (this.vx !== 0) {
            this.frameCounter++;
            if (this.frameCounter > 10) {
                this.frame = (this.frame + 1) % 4; // Assume 4 frames of walk
                this.frameCounter = 0;
            }
        } else {
            this.frame = 0; // Idle
        }
    }

    handleMapCollision(map, axis) {
        const left = Math.floor(this.x / this.tileSize);
        const right = Math.floor((this.x + this.width) / this.tileSize);
        const top = Math.floor(this.y / this.tileSize);
        const bottom = Math.floor((this.y + this.height) / this.tileSize);

        for (let r = top; r <= bottom; r++) {
            for (let c = left; c <= right; c++) {
                if (map.isSolid(c, r)) {
                    if (axis === 'x') {
                        if (this.vx > 0) this.x = c * this.tileSize - this.width;
                        if (this.vx < 0) this.x = (c + 1) * this.tileSize;
                        this.vx = 0;
                    } else if (axis === 'y') {
                        if (this.vy > 0) {
                            this.y = r * this.tileSize - this.height;
                            this.onGround = true;
                        }
                        if (this.vy < 0) this.y = (r + 1) * this.tileSize;
                        this.vy = 0;
                    }
                }
            }
        }

        // Check if actually on ground if not colliding
        if (axis === 'y' && this.vy > 0) {
            // Basic check - fall if no collision below
            // (Simplified for this version)
        }
    }

    draw(ctx) {
        ctx.save();
        if (this.facing === -1) {
            ctx.scale(-1, 1);
            ctx.translate(-(this.x * 2 + this.width), 0);
        }

        // Draw sprite (assuming 32x32 frames)
        ctx.drawImage(
            this.sprite,
            this.frame * 32, 0, 32, 32,
            Math.round(this.x), Math.round(this.y), this.width, this.height
        );

        ctx.restore();
    }
}

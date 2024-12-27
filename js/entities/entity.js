class Entity {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = { x: 0, y: 0 };
    }

    update(deltaTime) {
        this.x += this.velocity.x * deltaTime;
        this.y += this.velocity.y * deltaTime;
    }

    render(context) {
        context.fillStyle = '#fff';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    getBounds() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        };
    }

    collidesWith(other) {
        const bounds = this.getBounds();
        const otherBounds = other.getBounds();
        
        return bounds.x < otherBounds.x + otherBounds.width &&
               bounds.x + bounds.width > otherBounds.x &&
               bounds.y < otherBounds.y + otherBounds.height &&
               bounds.y + bounds.height > otherBounds.y;
    }
}
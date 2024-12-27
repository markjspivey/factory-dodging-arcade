class Sprite {
    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render(context, destX, destY) {
        context.drawImage(
            this.image,
            this.x, this.y,
            this.width, this.height,
            destX, destY,
            this.width, this.height
        );
    }
}
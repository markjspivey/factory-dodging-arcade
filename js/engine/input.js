class InputHandler {
    constructor() {
        this.keys = new Set();
        this.mousePosition = { x: 0, y: 0 };
        this.mouseDown = false;
    }

    init() {
        window.addEventListener('keydown', (e) => this.keys.add(e.key));
        window.addEventListener('keyup', (e) => this.keys.delete(e.key));
        window.addEventListener('mousemove', (e) => {
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
        });
        window.addEventListener('mousedown', () => this.mouseDown = true);
        window.addEventListener('mouseup', () => this.mouseDown = false);
    }

    isKeyPressed(key) {
        return this.keys.has(key);
    }

    getMousePosition() {
        return this.mousePosition;
    }

    isMouseDown() {
        return this.mouseDown;
    }
}
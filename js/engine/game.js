class Game {
    constructor(config) {
        this.config = config;
        this.state = new GameState();
        this.input = new InputHandler();
        this.lastTime = 0;
        this.accumulator = 0;
        this.timestep = 1000 / 60;
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.config.width;
        this.canvas.height = this.config.height;
        this.context = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        
        this.input.init();
        this.state.init();
        
        requestAnimationFrame((time) => this.gameLoop(time));
    }

    gameLoop(currentTime) {
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        this.accumulator += deltaTime;
        
        while (this.accumulator >= this.timestep) {
            this.update(this.timestep);
            this.accumulator -= this.timestep;
        }
        
        this.render();
        requestAnimationFrame((time) => this.gameLoop(time));
    }

    update(deltaTime) {
        this.state.update(deltaTime);
    }

    render() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.state.render(this.context);
    }
}
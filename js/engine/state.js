class GameState {
    constructor() {
        this.entities = new Set();
        this.score = 0;
        this.gameOver = false;
    }

    init() {
        // Initialize game state
    }

    update(deltaTime) {
        if (this.gameOver) return;
        
        for (const entity of this.entities) {
            entity.update(deltaTime);
        }
    }

    render(context) {
        for (const entity of this.entities) {
            entity.render(context);
        }
    }

    addEntity(entity) {
        this.entities.add(entity);
    }

    removeEntity(entity) {
        this.entities.delete(entity);
    }
}
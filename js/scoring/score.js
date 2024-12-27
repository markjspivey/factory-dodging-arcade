class ScoreManager {
    constructor() {
        this.currentScore = 0;
        this.highScores = this.loadHighScores();
        this.multiplier = 1;
    }

    addPoints(points) {
        this.currentScore += points * this.multiplier;
        this.checkHighScore();
    }

    setMultiplier(multiplier) {
        this.multiplier = multiplier;
    }

    checkHighScore() {
        if (this.currentScore > this.getLowestHighScore()) {
            this.addHighScore(this.currentScore);
        }
    }

    loadHighScores() {
        const scores = localStorage.getItem('highScores');
        return scores ? JSON.parse(scores) : [];
    }

    saveHighScores() {
        localStorage.setItem('highScores', JSON.stringify(this.highScores));
    }

    addHighScore(score) {
        this.highScores.push(score);
        this.highScores.sort((a, b) => b - a);
        this.highScores = this.highScores.slice(0, 10);
        this.saveHighScores();
    }

    getLowestHighScore() {
        return this.highScores.length < 10 ? 0 : this.highScores[9];
    }
}
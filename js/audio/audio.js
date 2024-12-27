class AudioManager {
    constructor() {
        this.sounds = new Map();
        this.music = null;
        this.volume = 1.0;
    }

    loadSound(name, url) {
        const audio = new Audio(url);
        this.sounds.set(name, audio);
    }

    playSound(name) {
        const sound = this.sounds.get(name);
        if (sound) {
            sound.currentTime = 0;
            sound.volume = this.volume;
            sound.play();
        }
    }

    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        if (this.music) {
            this.music.volume = this.volume;
        }
    }
}
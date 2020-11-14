class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }


    preload() {

        this.loadAudio();
    }

    create() {
          this.scene.start('Game');
    }
    loadTileMap() {
        
    }


    loadAudio() {
        
    }
}
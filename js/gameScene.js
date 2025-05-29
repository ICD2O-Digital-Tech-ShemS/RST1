/* global phaser */
// Created by: Shem
// Created on: May 2025
// This is theGame Scene for the game

/**
 * This class is the Game Scene for the game
 */
class GameScene extends Phaser.Scene {
    createAlien() {
        const alienXLocation = Math.floor(Math.random() * 1920) + 1
        let alienXVelocity = Math.floor(Math.random() * 50) + 1
        alienXVelocity *= Math.round(Math.random()) ? 1 : -1
        const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien')
        anAlien.body.velocity.y = 200
        anAlien.body.velocity.x = alienXVelocity
        this.alienGroup.add(anAlien)
    }

    constructor() {
        super({ key: 'gameScene' })
    
        this.background = null
        this.ship = null
        this.fireMissile = false
    }

    init(data) {
        this.cameras.main.setBackgroundColor('#ffffff')
    }

    preload() {
        console.log('Game Scene')
        this.load.image('starBackground', 'assets/starBackground.png')
        this.load.image('ship', 'assets/spaceShip.png')
        this.load.image('missile', 'assets/missile.png')
        this.load.image('alien', 'assets/alien.png')

        this.load.audio('laser', 'assets/laser1.wav')
    }

    create(data) {
        this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
        this.background.setOrigin(0, 0)

        this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, 'ship')
    
        this.missileGroup = this.physics.add.group()

        this.alienGroup = this.add.group()
        this.createAlien()
    }
}
    export default GameScene
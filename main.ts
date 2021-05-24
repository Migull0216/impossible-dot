input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(10)
    } else {
        game.gameOver()
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
music.playMelody("- C5 - E A D - C ", 120)
basic.forever(function () {
    Sprite.move(1)
    Sprite.ifOnEdgeBounce()
    basic.pause(10)
})

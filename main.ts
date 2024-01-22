input.onButtonPressed(Button.A, function () {
    Monkey.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Bullet = game.createSprite(Monkey.get(LedSpriteProperty.X), Monkey.get(LedSpriteProperty.Y))
    Bullet.turn(Direction.Left, 90)
    for (let index = 0; index < 4; index++) {
        Bullet.move(1)
        basic.pause(100)
        if (Bullet.isTouching(Banana)) {
            Banana.set(LedSpriteProperty.X, randint(0, 3))
            game.addScore(1)
        }
    }
    Bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    Monkey.change(LedSpriteProperty.X, 1)
})
let Banana: game.LedSprite = null
let Monkey: game.LedSprite = null
let Bullet: game.LedSprite = null
Bullet = game.createSprite(randint(0, 3), 0)
Monkey = game.createSprite(2, 4)
game.setScore(0)
game.startCountdown(60000)
basic.forever(function () {
    basic.pause(randint(0, 5000))
    Banana.set(LedSpriteProperty.X, randint(0, 3))
})

scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedEast, function (sprite, location) {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    500,
    false
    )
    tiles.setTilemap(tilemap`level1`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    tiles.setTilemap(tilemap`level4`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    tiles.setTilemap(tilemap`level7`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    100,
    false
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . . d d d d d . . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . c c c c c c c . . . . 
    . . . . . . c c . c c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
game.splash("There are 3 buildings, they will get you to the next point")

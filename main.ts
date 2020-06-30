namespace SpriteKind {
    export const HudStoredObject = SpriteKind.create()
    export const Scenery = SpriteKind.create()
    export const HudBarTop = SpriteKind.create()
    export const Snail = SpriteKind.create()
    export const TheSnailExit = SpriteKind.create()
    export const SnailEntrance = SpriteKind.create()
    export const Item = SpriteKind.create()
    export const TheTNT = SpriteKind.create()
    export const Explosion = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . 2 2 4 4 4 2 2 4 4 4 2 4 4 4 
. 4 4 4 1 4 4 4 3 4 4 1 3 1 4 4 
4 4 4 4 1 4 4 4 3 4 1 3 3 3 1 4 
4 4 4 1 3 1 4 4 3 1 3 3 4 4 3 1 
4 4 1 3 3 3 1 4 3 3 3 3 4 4 4 3 
4 1 4 4 3 3 3 1 3 3 3 3 4 4 4 3 
1 3 4 4 3 3 3 1 3 3 3 3 1 4 4 3 
2 3 4 1 3 4 4 3 3 3 4 4 3 1 4 1 
2 3 1 3 3 4 4 4 3 3 4 4 4 3 1 1 
2 4 4 1 1 1 4 4 2 2 4 4 4 3 3 1 
4 4 4 1 3 3 1 4 1 1 1 4 4 2 1 2 
4 4 4 1 3 3 1 1 2 2 1 1 4 2 1 2 
4 4 1 1 3 1 1 1 2 2 2 1 1 1 1 1 
4 1 3 1 1 2 2 1 1 2 2 1 1 1 1 1 
1 3 3 3 1 2 2 1 1 1 2 1 1 1 1 1 
2 3 3 3 3 1 2 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
4 2 2 4 4 2 4 4 2 2 4 4 4 2 2 4 
4 4 3 4 4 3 4 4 3 3 4 4 4 3 3 4 
4 4 3 4 1 3 1 4 3 3 4 1 1 3 3 1 
1 4 3 1 3 3 3 1 3 3 1 1 3 4 4 3 
3 1 3 3 3 3 4 4 3 3 3 3 3 4 4 3 
3 4 4 3 3 4 4 4 3 3 3 4 4 1 4 3 
3 4 4 3 3 4 4 1 1 3 3 4 4 3 1 4 
3 1 4 3 3 4 1 1 3 3 3 1 4 3 4 4 
3 3 1 3 1 3 3 1 3 3 1 1 1 3 4 4 
3 3 1 1 2 3 3 1 3 1 3 3 1 3 1 1 
2 3 1 2 2 3 1 1 1 2 3 3 1 1 1 1 
2 2 1 2 2 1 1 1 2 2 2 3 2 2 1 1 
2 2 1 2 1 1 1 1 2 2 2 1 2 2 2 1 
1 2 1 1 1 2 2 1 2 2 1 1 1 2 2 1 
1 1 1 1 1 2 2 1 2 1 1 1 1 1 2 1 
1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
2 2 4 4 2 2 2 4 4 2 4 4 2 4 . . 
3 4 4 4 3 3 4 4 4 3 4 4 3 4 4 . 
3 4 4 1 3 3 4 4 4 3 4 1 3 1 4 4 
3 4 1 3 3 3 4 4 1 3 1 3 3 3 1 4 
3 1 3 3 3 3 1 1 3 3 4 4 3 3 3 1 
1 3 3 4 4 3 3 3 3 3 4 4 3 3 4 4 
1 3 3 4 4 3 3 3 3 3 4 1 3 3 4 4 
1 3 3 1 4 3 4 4 3 3 1 3 3 3 3 4 
1 3 3 1 1 3 4 4 3 3 3 4 4 3 3 2 
1 1 3 1 1 1 1 4 3 1 4 4 4 3 3 2 
2 2 1 2 2 2 1 1 1 1 4 4 1 3 3 2 
2 2 1 2 2 2 2 1 2 2 4 1 2 2 4 4 
2 1 1 1 2 2 2 1 2 2 1 4 3 2 4 4 
1 1 1 1 1 2 2 1 2 1 4 3 3 2 4 4 
1 1 1 1 1 1 2 1 1 1 3 3 1 2 2 4 
1 1 1 1 1 1 1 1 1 1 3 1 1 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
2 3 1 1 3 3 1 1 1 2 2 1 1 1 1 1 
4 4 3 1 3 3 1 1 2 2 2 1 1 1 1 1 
4 4 3 2 2 3 1 1 2 2 1 1 1 1 1 1 
4 4 3 2 2 1 1 1 2 1 1 1 1 1 1 1 
4 1 3 3 3 1 1 1 1 1 1 1 1 1 1 1 
1 4 4 3 3 3 1 2 2 1 1 1 1 1 1 1 
4 4 4 3 3 3 1 2 2 1 1 1 1 1 1 1 
4 4 4 2 3 3 3 1 2 1 1 1 1 1 1 1 
4 4 1 3 3 3 3 1 1 1 1 1 1 1 1 1 
4 1 3 3 3 1 3 1 1 1 2 2 1 1 1 1 
1 3 3 2 3 1 1 1 1 1 2 2 1 1 1 1 
2 4 4 4 2 1 2 2 1 1 2 1 1 1 1 1 
2 4 4 4 4 1 2 2 2 1 1 1 1 1 1 1 
2 1 4 4 4 1 1 2 2 1 1 1 1 1 1 1 
2 3 1 4 4 1 1 1 2 1 1 1 1 1 1 1 
4 4 3 1 4 1 1 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
1 1 1 1 1 1 1 2 1 1 1 1 2 2 3 3 
1 1 1 1 1 1 1 1 1 1 1 1 2 3 3 3 
1 1 1 1 1 2 2 1 2 2 3 3 2 3 3 3 
1 1 1 1 1 2 2 1 2 2 3 3 2 3 3 1 
1 1 1 1 1 1 2 1 2 1 3 1 2 3 1 2 
1 1 1 1 1 1 1 1 1 1 1 2 2 1 2 2 
1 1 1 1 1 1 1 2 2 1 1 2 2 2 2 2 
1 1 1 1 1 1 2 2 2 1 1 2 2 2 3 3 
1 1 1 1 1 1 2 2 1 1 1 3 3 2 3 3 
1 1 1 1 1 1 2 1 1 2 2 3 3 3 1 3 
1 1 1 1 1 1 1 1 1 2 2 1 3 3 1 1 
1 1 1 1 1 1 1 1 1 2 1 2 1 3 2 1 
1 1 1 1 1 2 2 1 1 1 1 2 2 1 2 2 
1 1 1 1 1 2 2 2 1 1 1 3 3 2 2 2 
1 1 1 1 1 2 2 2 1 1 3 3 3 2 2 2 
1 1 1 1 1 1 2 2 1 1 3 3 1 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
4 4 3 3 2 1 1 2 2 2 1 1 1 1 1 1 
4 1 3 4 4 1 1 2 2 1 1 1 1 1 1 1 
1 3 3 4 4 1 1 2 1 1 1 2 2 1 1 1 
2 3 3 1 4 1 1 1 1 1 1 2 2 1 1 1 
2 3 3 2 1 2 1 1 1 1 1 1 2 1 1 1 
2 4 4 2 2 2 2 1 1 1 1 1 1 1 1 1 
4 4 4 2 2 4 4 2 1 2 2 1 1 1 1 1 
4 4 4 2 2 4 4 2 1 2 2 2 1 2 2 1 
4 4 4 2 2 4 1 3 3 1 2 2 1 2 2 2 
4 4 1 2 2 1 2 3 3 1 1 1 1 1 2 2 
4 1 3 2 2 2 2 3 1 2 1 1 3 3 1 1 
1 3 3 3 3 3 2 1 3 3 2 2 3 3 3 2 
2 3 3 3 3 3 3 2 3 3 3 2 3 3 3 2 
2 3 3 3 3 3 3 2 3 3 3 2 1 3 3 2 
. 1 3 3 3 1 2 2 1 3 3 2 2 1 3 2 
. . 1 1 1 2 2 2 2 1 1 2 2 2 1 2 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 2 2 1 1 2 2 1 1 1 1 1 1 1 1 
1 2 2 2 1 1 1 2 2 1 1 2 2 1 1 1 
1 2 2 1 1 1 1 2 2 1 1 2 2 1 1 1 
1 2 1 1 1 1 1 1 2 1 1 2 1 1 1 1 
1 1 1 2 2 2 2 1 1 1 1 1 1 1 1 1 
1 1 2 2 2 2 1 1 2 1 2 2 2 2 1 1 
1 1 2 2 3 3 1 1 2 1 1 3 3 2 1 1 
3 3 3 2 3 1 2 2 2 2 2 3 3 3 2 2 
3 3 3 2 1 2 2 3 3 2 2 3 3 3 2 2 
3 3 3 2 3 3 2 3 3 2 2 1 3 3 2 2 
3 3 1 2 3 3 2 1 3 3 2 2 1 3 2 2 
1 1 2 2 1 1 2 2 1 1 2 2 2 1 2 2 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
1 1 1 1 1 1 1 1 1 2 1 1 2 3 3 2 
1 1 1 1 1 1 2 2 1 1 3 3 2 3 3 3 
1 2 2 1 1 2 2 2 1 1 3 3 2 3 3 3 
1 2 2 1 1 2 2 2 1 1 3 1 2 1 3 3 
1 2 1 1 1 2 2 1 1 1 2 2 2 1 3 3 
1 1 1 1 1 2 1 1 1 1 2 2 2 2 1 1 
1 1 1 1 1 1 1 1 1 2 2 2 2 3 3 1 
1 2 2 1 1 1 1 1 2 2 2 1 3 3 3 1 
1 2 2 1 1 1 1 1 2 2 1 1 3 3 1 1 
1 1 2 1 1 1 1 1 1 1 1 2 3 1 3 3 
1 1 1 1 1 1 1 1 3 3 2 2 1 2 3 3 
2 2 3 3 3 2 2 3 3 3 2 2 2 2 1 3 
2 2 3 3 3 2 2 3 3 3 2 3 3 2 2 1 
2 3 3 3 3 2 2 3 3 1 2 3 3 3 2 2 
2 3 3 1 1 2 2 3 3 1 2 1 3 3 2 . 
2 1 1 2 2 2 2 1 1 2 2 2 1 1 . . 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile12 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile13 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`
    //% blockIdentity=images._tile
    export const tile14 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 3 . . . . . . . . 4 . . . 
. . . 2 3 . . . 4 . . 4 3 . . . 
. . . 2 2 3 . 4 4 . . 4 3 . 4 . 
4 . 4 2 2 3 3 4 3 . . 3 2 2 4 . 
4 4 1 4 2 2 3 4 3 . 3 2 2 4 3 . 
. 1 2 4 4 2 2 3 1 3 3 2 4 3 3 . 
. 2 2 1 4 4 2 2 1 3 2 2 3 3 2 2 
. . 3 1 3 3 4 2 2 3 2 3 3 1 2 . 
4 4 2 3 1 3 3 3 2 2 3 3 1 2 3 3 
. 1 3 3 2 1 3 3 2 2 3 3 2 3 3 1 
. . 1 3 3 3 2 3 3 2 3 2 3 1 1 . 
`
    //% blockIdentity=images._tile
    export const tile15 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 4 . 4 
. . . . . . . . . . 4 . . . 4 . 
. . . . . . . 4 . 4 4 4 . 3 4 4 
. . . . . 4 4 . 4 . 4 4 3 3 1 1 
. . . . . 3 4 3 1 3 4 1 4 4 3 3 
. . . . 3 3 1 4 4 d 1 3 4 4 3 3 
. . . 4 4 3 4 4 d c d 4 1 1 3 3 
. . 4 4 4 3 d 4 1 d 4 4 4 3 3 d 
. . 4 4 1 d c d 3 3 1 4 4 3 4 4 
. . 4 1 3 3 d 3 4 3 3 1 4 3 4 4 
. 4 1 3 3 3 3 4 4 3 4 4 1 3 1 4 
. 4 4 4 4 4 3 4 . 3 4 4 2 2 2 1 
. . 1 1 4 1 3 1 3 3 4 1 2 4 4 1 
`
    //% blockIdentity=images._tile
    export const tile16 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 4 4 . 4 . . . . . . . . . . 
. . . 4 . 4 4 . 4 . . . . . . . 
1 . . 3 d d . 4 . 4 4 . . . . . 
3 4 4 d c c d 1 2 4 . . . . . . 
3 4 4 2 d d 2 4 4 1 . . . . . . 
3 4 1 2 2 2 2 4 4 4 4 4 . . . . 
d 3 3 2 4 4 2 1 4 4 2 4 4 . . . 
c d 2 4 4 4 2 2 1 4 2 1 4 . . . 
d 3 2 4 4 1 2 4 2 1 2 2 1 4 . . 
4 4 2 4 1 2 2 2 d 2 2 2 4 4 . . 
4 4 2 1 4 4 2 d c d 2 1 1 4 . . 
1 1 2 2 4 4 2 1 d 2 4 4 4 1 . . 
1 4 4 2 . 4 2 2 1 2 1 4 1 . . . 
`
    //% blockIdentity=images._tile
    export const tile17 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 4 . 4 
. . . . . . . . . . 4 . . . 4 . 
. . . . . . . 4 . 4 4 4 . 2 4 4 
. . . . . 4 4 . 4 2 4 4 2 2 1 1 
. . . . . 2 4 2 1 2 4 1 4 4 2 2 
. . . . 2 2 1 4 4 2 1 2 4 4 2 2 
. . . 4 4 2 4 4 4 2 4 4 1 1 2 2 
. . 4 4 4 2 4 4 1 2 4 4 4 2 2 1 
. . 4 4 1 2 4 1 2 2 1 4 4 2 4 4 
. . 4 1 2 2 1 4 4 2 2 1 4 2 4 4 
. 4 1 2 4 4 2 4 4 2 4 4 1 2 1 4 
. 4 4 2 4 4 2 4 1 2 4 4 2 2 2 1 
`
    //% blockIdentity=images._tile
    export const tile18 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 . . . . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
1 1 1 2 2 . . . . . . . . . . . 
2 1 1 1 1 1 2 2 2 . . . . . . . 
4 2 1 1 1 1 1 1 . . . 1 . . . . 
4 4 1 2 2 1 1 1 1 1 1 . . . . . 
4 4 1 2 2 2 1 1 2 2 1 . . 1 1 . 
1 4 1 1 2 2 1 1 2 2 2 1 1 1 . . 
2 1 1 1 1 2 1 1 1 2 2 1 1 1 . . 
2 4 4 1 1 1 1 1 1 1 2 1 1 1 . . 
2 4 4 2 2 1 1 2 2 1 1 1 1 1 1 . 
2 1 4 2 2 1 2 2 2 1 1 1 1 1 1 . 
`
    //% blockIdentity=images._tile
    export const tile19 = img`
2 2 1 1 4 1 1 1 2 2 4 1 2 4 4 1 
. 4 4 4 2 2 1 2 2 4 4 2 2 1 4 4 
4 4 4 1 2 2 1 1 2 4 4 4 2 2 4 4 
4 4 1 2 4 2 2 1 2 1 4 4 1 2 1 1 
4 1 2 2 4 4 4 2 4 4 1 4 2 2 2 1 
1 1 2 2 1 4 4 1 4 4 1 1 2 2 1 2 
. 1 1 2 1 1 1 1 1 4 1 1 2 1 1 2 
2 2 1 1 1 1 2 2 1 1 2 2 1 1 1 1 
2 2 1 2 2 1 2 2 2 1 2 2 1 1 1 1 
2 1 1 2 2 1 1 2 2 1 2 1 1 2 2 1 
. 1 1 1 2 1 1 1 1 1 1 1 2 2 2 1 
. 1 2 2 1 2 2 1 2 2 1 1 2 2 1 2 
. 1 2 2 1 2 2 1 2 2 1 1 2 1 1 2 
. 1 2 1 1 1 2 1 2 1 1 1 1 2 2 1 
. . 1 2 2 1 1 1 1 1 1 1 1 2 2 1 
. . 1 2 2 1 1 1 1 1 1 1 1 2 1 2 
`
    //% blockIdentity=images._tile
    export const tile20 = img`
2 2 1 2 1 1 2 2 1 1 1 1 1 1 1 1 
2 2 2 1 1 1 2 1 1 1 1 1 1 1 . 1 
2 2 2 1 2 2 1 1 1 1 1 1 1 1 1 . 
1 2 2 1 2 2 1 2 2 1 1 1 1 1 2 2 
1 1 2 1 1 2 1 2 2 2 1 1 1 1 2 2 
2 1 1 2 2 1 1 1 2 2 1 1 1 1 1 2 
2 2 1 2 2 1 1 1 1 1 1 1 2 2 1 1 
2 2 1 2 2 1 1 2 2 1 1 1 2 1 1 1 
1 2 1 1 2 1 1 2 2 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 2 1 1 1 2 2 1 . 
1 1 2 2 1 1 1 1 1 2 2 1 2 2 1 . 
2 1 2 2 1 1 1 1 1 2 2 1 1 2 1 . 
2 1 2 1 2 2 1 1 1 1 2 1 1 1 1 1 
2 1 1 1 2 2 1 2 2 1 1 1 1 1 . 1 
1 1 2 2 1 2 1 2 2 1 2 2 1 1 . . 
2 1 2 2 1 1 1 2 1 1 2 2 . 1 . . 
`
    //% blockIdentity=images._tile
    export const tile21 = img`
. . 1 2 . 1 1 . 1 1 . 1 1 1 1 2 
. . . . . 1 . . 1 . . . . . . 2 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . 1 1 . . . . 
. . . . . . . . . . . 2 1 1 . . 
. . . . . . . . . . . . 2 1 1 1 
. . . . . . . . . . . . 2 1 1 1 
. . . . . . . . . . . . 1 1 2 1 
. . . . . . . . . . . . 1 2 . . 
. . . . . . . . . . . . 1 2 . 1 
. . . . . . . . . . . . 1 2 . 1 
. . . . . . . . . . . . 1 1 2 2 
. . . . . . . . . . . 1 1 1 1 1 
. . . . . . . . . . . 2 1 1 1 1 
. . . . . . . . . 1 2 1 2 2 1 1 
. . . . . . . . 1 2 1 2 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile22 = img`
2 . 1 2 . . 1 1 . . 1 2 . . . . 
. . . . . . 1 . 1 . . . . . . . 
. . . . 1 1 . . . . . . . . . . 
. . . 1 1 . . . . . . . . . . . 
1 . 1 1 . . . . . . . . . . . . 
1 1 1 . . . . . . . . . . . . . 
1 1 1 . . . . . . . . . . . . . 
1 1 . . . . . . . . . . . . . . 
1 1 . . . . . . . . . . . . . . 
1 1 . . . . . . . . . . . . . . 
1 1 . . . . . . . . . . . . . . 
1 1 . . . . . . . . . . . . . . 
1 1 . . . . . . . . . . . . . . 
2 1 . . . . . . . . . . . . . . 
1 2 1 . . . . . . . . . . . . . 
1 2 1 2 . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile23 = img`
. 3 3 3 3 3 3 3 4 4 4 4 4 4 4 . 
3 3 1 1 1 1 1 1 1 1 1 1 1 1 4 4 
3 1 1 2 2 2 2 2 2 2 2 2 2 1 1 4 
3 1 2 2 2 2 2 4 3 2 2 2 2 2 1 2 
3 1 2 2 2 2 4 3 3 3 2 2 2 2 1 2 
3 1 2 2 2 4 3 3 3 3 3 2 2 2 1 2 
3 1 2 2 4 3 3 3 3 3 3 3 2 2 1 2 
3 1 2 4 3 3 3 3 3 3 3 3 3 2 1 2 
3 1 2 2 2 2 4 3 3 3 2 2 2 2 1 2 
3 1 2 2 2 2 4 3 3 3 2 2 2 2 1 2 
3 1 2 2 2 2 4 3 3 3 2 2 2 2 1 2 
4 1 2 2 2 2 4 3 3 3 2 2 2 2 1 2 
4 1 2 2 2 2 4 3 3 3 2 2 2 2 1 2 
4 1 1 2 2 2 2 2 2 2 2 2 2 1 1 2 
4 4 1 1 1 1 1 1 1 1 1 1 1 1 2 2 
. 4 4 4 2 2 2 2 2 2 2 2 2 2 2 . 
`
    //% blockIdentity=images._tile
    export const tile24 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 3 . . . . . . 3 3 . . . 
. . . 3 3 4 . . . . 4 3 4 4 . . 
2 2 2 2 4 4 . 2 3 3 2 4 4 4 . 3 
. . . . 4 4 . . . . . 4 4 4 . . 
. . . 4 4 4 . . . . 4 4 4 4 . . 
2 3 3 2 4 4 . 2 2 2 2 4 4 4 . 2 
2 2 2 2 4 4 . 2 2 2 2 4 4 4 . 2 
. . . . 4 4 . . . . . 4 4 4 . . 
. . . . 4 4 . . . . . 4 4 4 . . 
2 2 2 2 4 4 . 2 2 2 2 4 4 4 . 2 
2 2 2 2 4 4 . 2 2 2 2 4 4 4 . 2 
. . . . 4 4 . . . . . 4 4 4 . . 
`
    //% blockIdentity=images._tile
    export const tile25 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 4 . . . . . . 4 . . . . 4 . 
. 3 4 4 . . . . 4 4 4 . . 4 4 4 
2 2 4 4 . 2 2 2 2 4 4 . 2 2 4 4 
. . 4 4 . . . . . 4 4 . . . 4 4 
. . 4 4 . . . . 4 4 4 . . . 4 4 
2 2 4 4 . 2 3 3 2 4 4 . 2 2 4 4 
2 2 4 4 . 2 2 2 2 4 4 . 2 2 4 4 
. . 4 4 . . . . . 4 4 . . . 4 4 
. . 4 4 . . . . . 4 4 . . . 4 4 
2 2 4 4 . 3 2 2 2 4 4 . 2 2 4 4 
2 2 4 4 . 2 2 2 2 4 4 . 2 2 4 4 
. . 4 4 . . . . . 4 4 . . . 4 4 
`
    //% blockIdentity=images._tile
    export const tile26 = img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 1 1 1 1 3 . . . . . 
. . . . 2 1 1 1 1 1 1 3 . . . . 
. . . 2 1 1 1 1 1 1 1 1 3 . . . 
. . 2 1 1 1 1 1 1 1 1 1 1 3 . . 
. . 2 1 1 1 1 1 1 1 1 1 1 3 . . 
. 2 1 1 1 1 1 1 1 1 1 1 1 1 3 . 
. 2 1 1 1 1 1 1 1 1 1 1 1 1 3 . 
. 2 1 1 1 1 1 1 1 1 1 1 1 1 3 . 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
`
    //% blockIdentity=images._tile
    export const tile27 = img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 4 4 4 4 3 . . . . . 
. . . . 2 4 4 4 4 4 4 3 . . . . 
. . . 2 4 4 4 4 4 4 4 4 3 . . . 
. . 2 4 4 4 4 4 4 4 4 4 4 3 . . 
. . 2 4 4 4 4 4 4 4 4 4 4 3 . . 
. 2 4 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 4 3 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
`
    //% blockIdentity=images._tile
    export const tile28 = img`
4 2 1 1 1 1 1 1 1 1 1 1 1 1 2 4 
4 4 4 1 1 1 1 1 1 1 1 1 1 2 3 4 
4 4 2 2 2 2 2 2 2 2 2 2 2 2 3 1 
1 4 3 4 4 4 4 4 4 4 4 4 4 3 4 3 
3 1 4 3 3 3 3 3 3 3 3 3 3 2 4 3 
3 4 2 2 2 2 2 2 2 2 2 2 2 2 4 3 
3 4 3 4 4 4 4 4 4 4 4 4 4 3 1 4 
3 1 4 3 3 3 3 3 3 3 3 3 3 2 4 4 
3 3 2 2 2 2 2 2 2 2 2 2 2 2 4 4 
3 3 3 4 4 4 4 4 4 4 4 4 4 3 1 1 
2 3 4 3 3 3 3 3 3 3 3 3 3 2 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
2 2 3 4 4 4 4 4 4 4 4 4 4 3 2 1 
1 2 4 3 3 3 3 3 3 3 3 3 3 2 2 1 
1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 1 3 4 4 4 4 4 4 4 4 4 4 3 1 1 
`
    //% blockIdentity=images._tile
    export const tile29 = img`
1 1 4 3 3 3 3 3 3 3 3 3 3 2 1 1 
1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
1 1 3 4 4 4 4 4 4 4 4 4 4 3 1 1 
1 1 4 3 3 3 3 3 3 3 3 3 3 2 1 1 
1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
1 1 3 4 4 4 4 4 4 4 4 4 4 3 1 1 
1 1 4 3 3 3 3 3 3 3 3 3 3 2 1 1 
1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
1 1 3 4 4 4 4 4 4 4 4 4 4 3 1 1 
1 1 4 3 3 3 3 3 3 3 3 3 3 2 1 1 
1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
1 1 3 4 4 4 4 4 4 4 4 4 4 3 1 1 
1 1 4 3 3 3 3 3 3 3 3 3 3 2 1 1 
1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
1 1 3 4 4 4 4 4 4 4 4 4 4 3 1 1 
1 1 2 3 3 3 3 3 3 3 3 3 3 2 1 1 
`
    //% blockIdentity=images._tile
    export const tile30 = img`
1 1 4 3 3 3 3 3 3 3 3 3 3 2 1 1 
1 1 2 2 2 2 2 2 2 2 2 2 2 2 1 1 
1 1 2 4 4 4 4 4 4 4 4 4 4 4 2 2 
1 1 2 4 4 4 4 4 4 4 4 4 4 4 4 2 
1 1 2 4 4 4 4 4 4 4 4 4 4 4 4 3 
1 1 2 4 4 4 4 4 4 4 4 4 4 4 4 3 
1 1 2 4 4 4 4 4 4 4 4 4 4 4 4 3 
1 1 2 4 4 4 4 4 4 4 4 4 4 4 4 3 
1 1 2 3 4 4 4 4 4 4 4 4 4 4 4 3 
1 1 2 2 3 4 4 4 4 4 4 4 4 4 4 3 
1 1 1 2 3 4 4 4 4 4 4 4 4 4 4 3 
1 1 1 2 3 4 4 4 4 4 4 4 4 4 4 3 
1 1 1 1 2 2 3 4 4 4 4 4 4 4 4 2 
1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile31 = img`
1 1 1 1 1 1 1 2 1 1 1 1 2 2 3 3 
1 1 1 1 1 1 1 1 1 1 1 1 2 3 3 3 
3 2 2 3 2 2 3 2 2 3 2 2 3 2 2 2 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 2 1 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 1 1 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 1 1 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 1 1 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 1 1 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 1 1 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 1 1 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 1 1 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 1 1 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 2 1 
3 2 2 3 2 2 3 2 2 3 2 2 3 2 2 2 
1 1 1 1 2 2 2 1 1 1 3 3 3 2 2 2 
1 1 1 1 1 2 2 1 1 1 3 3 3 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile32 = img`
. 3 3 3 3 3 3 1 3 3 3 3 3 3 3 . 
3 2 2 2 2 2 2 1 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 1 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 1 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 1 2 1 2 2 2 2 2 3 
3 2 2 2 2 2 1 1 2 2 1 2 2 2 2 3 
3 2 2 2 2 2 1 2 2 2 2 1 2 2 2 3 
3 2 2 2 2 1 2 2 2 2 2 1 2 2 2 3 
3 2 2 2 1 2 2 2 2 2 2 1 2 2 2 3 
3 2 2 1 2 1 2 2 2 2 2 2 1 2 2 3 
3 2 2 1 2 2 1 2 2 2 2 2 1 2 2 3 
3 2 1 2 2 2 2 1 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 1 2 1 2 2 2 2 2 2 3 
3 2 2 2 2 2 1 2 2 2 2 2 2 2 2 3 
3 2 2 2 2 1 2 2 2 2 2 2 2 2 2 3 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
`
    //% blockIdentity=images._tile
    export const tile33 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
3 2 2 3 2 2 3 2 2 3 2 2 3 2 2 3 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
4 2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 
3 2 2 3 2 2 3 2 2 3 2 2 3 2 2 3 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile34 = img`
1 1 1 1 1 1 1 2 1 1 1 1 2 2 3 3 
1 1 1 1 1 1 3 1 1 1 1 1 2 3 3 3 
1 1 1 1 1 2 2 1 2 2 3 3 2 3 3 3 
1 1 1 1 1 2 2 1 2 2 3 3 2 3 3 1 
1 1 1 1 1 1 2 1 2 1 3 1 2 3 1 2 
1 1 1 1 1 1 1 1 1 1 1 2 2 1 2 2 
1 1 1 1 1 1 1 2 2 1 1 2 2 2 2 2 
1 1 1 1 1 1 2 2 2 1 1 2 2 2 3 3 
1 1 1 1 1 1 2 2 1 1 1 3 3 2 3 3 
1 1 1 1 1 1 2 1 1 2 2 3 3 3 1 3 
1 1 1 1 1 1 1 1 1 2 2 1 3 3 1 1 
1 1 1 1 1 1 1 3 1 2 1 2 1 3 2 1 
1 1 1 1 1 2 2 1 1 1 1 2 2 1 2 2 
1 1 1 1 1 2 2 2 1 1 1 3 3 2 2 2 
1 1 1 1 1 2 2 2 1 1 3 3 3 2 2 2 
1 1 1 1 1 1 2 2 1 1 3 3 1 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile35 = img`
2 3 1 1 3 3 1 1 1 2 2 1 1 1 1 1 
4 4 3 1 3 3 1 1 2 2 2 1 1 1 1 1 
4 4 3 2 2 3 1 1 2 2 1 1 1 1 1 1 
4 4 3 2 2 1 1 1 2 1 1 1 1 1 1 1 
4 1 3 3 3 1 1 1 1 3 3 1 1 1 1 1 
1 4 4 3 3 3 1 2 2 1 3 1 1 1 1 1 
4 4 4 3 3 3 1 2 2 1 1 1 1 1 1 1 
4 4 4 2 3 3 3 1 2 1 1 1 1 1 1 1 
4 4 1 3 3 3 3 1 1 1 1 1 1 1 1 1 
4 1 3 3 3 1 3 1 1 1 2 2 1 1 1 1 
1 3 3 2 3 1 1 1 1 1 2 2 1 1 1 1 
2 4 4 4 2 1 2 2 1 1 2 1 1 1 1 1 
2 4 4 4 4 1 2 2 2 1 1 1 1 1 1 1 
2 1 4 4 4 1 1 2 2 1 1 1 1 1 1 1 
2 3 1 4 4 1 1 1 2 3 1 1 1 1 1 1 
4 4 3 1 4 1 1 1 1 3 3 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile36 = img`
. 3 3 3 3 3 3 1 3 3 3 3 3 3 3 . 
3 2 2 2 2 2 2 1 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 1 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 1 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 1 2 1 2 2 2 2 2 3 
3 2 2 2 2 2 1 1 2 2 1 2 2 2 2 3 
3 2 2 2 2 2 1 2 2 2 2 1 2 2 2 3 
3 2 2 2 2 2 2 2 2 2 2 1 2 2 2 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
`
    //% blockIdentity=images._tile
    export const tile37 = img`
. 3 3 3 3 3 3 1 3 3 3 3 3 3 3 . 
3 2 2 2 2 2 2 1 2 2 2 2 2 2 2 3 
3 2 2 2 2 2 1 2 1 2 2 2 2 2 2 3 
3 2 2 2 2 1 2 2 1 2 2 2 2 1 2 3 
3 2 2 2 1 2 2 1 2 1 2 2 2 2 1 3 
3 2 2 1 1 2 1 1 2 2 1 2 2 2 2 1 
3 2 1 2 2 2 1 2 2 2 2 1 2 2 2 3 
3 2 1 2 2 1 2 2 2 2 2 1 2 2 1 3 
3 1 2 2 1 2 2 2 2 2 2 1 2 2 2 1 
3 2 2 1 2 1 2 2 2 2 2 2 1 2 2 3 
3 2 2 1 2 2 1 2 2 2 2 2 1 2 2 3 
3 2 1 2 2 2 2 1 2 2 2 1 2 2 2 3 
3 1 2 2 2 2 1 2 1 2 1 2 1 2 2 3 
3 1 2 2 2 2 1 2 2 2 1 2 2 1 2 3 
3 2 1 2 2 1 2 2 2 2 1 2 2 2 1 3 
. 3 1 3 3 3 3 3 3 1 3 3 3 3 1 2 
`
}
function ClearLevel () {
    for (let value of sprites.allOfKind(SpriteKind.HudStoredObject)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Scenery)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Snail)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.TheSnailExit)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.SnailEntrance)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.SnailEntrance)) {
        value.destroy()
    }
}
function ChangeLevel () {
    ClearLevel()
    if (Level == 1) {
        LevelWidth = 26
        SnailsRemaining = 10
        SnailsSpawned = 0
        tiles.setTilemap(tiles.createTilemap(
            hex`1a001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101100000000000000000000000000000000000000000000000012130000000000000000000000000000000000000a160e0f000d1415190000171700180000000000000000000001020202020202020202020202021b030000000000000000000004050505050505050505050505051d1e0000000103000e0f1a0004050505050505050505050505050506000d0004060102020203040505050505050505050505050505060102020203040505050604050505050505050505050505050506040505050604050505060405050505050505050505050505050604050505060405050506040505050505050505050505050505060405050506040505050607080808080808080808080808080809070808080907080808090000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37],
            TileScale.Sixteen
        ))
    }
    if (Level == 2) {
        LevelWidth = 36
        SnailsRemaining = 10
        SnailsSpawned = 0
        tiles.setTilemap(tiles.createTilemap(
            hex`24001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000010110000000000000102020300000000000000000000000000000000000000000000000012130000220000000000002100000200000000000000000000000000000000000000000a141500002219000e0f000021000d0000000000000000000000000000000000000000010202030000070808080808230902020002000000000000000000000000000000000000040505060000000000000000000000210000000000000000000000000000000000000000040505062200000d00181800000000210000020000000000000000000000000000000000040505060102020202020202021b02030000000000000000101100000000000000000000040505060405050505050505051c05060000000200000000121300000000000000000000070808090405050505050505051c05060000000000181817141500170000000000000000050505050405050505050505051d201e000000000001020202021b03000000000000000005050505040505050505050505050506000d00000004050505051d1e00000e0f00001a00010202020708080808080808080808090202020203040505050505060102020202020203040505050505050505050505050505050505050506040505050505060405050505050506040505050505050505050505050505050505050506070808080808090405050505050506000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . 2 . . 2 . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 2 2 2 2 2 . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile31,myTiles.tile32,myTiles.tile33,myTiles.tile34,myTiles.tile35,myTiles.tile36,myTiles.tile37],
            TileScale.Sixteen
        ))
    }
    AddScenery()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    let PowerUp = ""
    if (PowerUp == "Apple" && itemCount < 0) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 4 1 4 . . . . . . . 
. . . . . 3 4 4 4 4 . . . . . . 
. . . . . 3 3 3 4 4 . . . . . . 
. . . . . 3 3 3 4 2 . . . . . . 
. . . . . . 3 3 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, thePlayer, 110 * Right, -44)
        projectile.ay = 150
        itemCount += -1
    }
    if (PowerUp == "TNT" && (thePlayer.isHittingTile(CollisionDirection.Bottom) && itemCount < 0)) {
        TNT = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 2 4 3 2 4 3 2 4 3 2 4 3 2 2 1 
1 2 4 3 2 4 3 2 4 3 2 4 3 2 2 1 
1 2 2 3 2 2 3 2 2 3 2 2 3 2 2 1 
1 4 1 1 1 4 1 4 4 1 4 1 1 1 4 1 
1 4 4 1 4 4 1 1 4 1 4 4 1 4 4 1 
1 4 4 1 4 4 1 4 1 1 4 4 1 4 4 1 
1 4 4 1 4 4 1 4 4 1 4 4 1 4 4 1 
1 2 2 3 2 2 3 2 2 3 2 2 3 2 2 1 
1 2 4 3 2 4 3 2 4 3 2 4 3 2 2 1 
1 2 4 3 2 4 3 2 4 3 2 4 3 2 2 1 
1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.TheTNT)
        itemCount += -1
    }
})
function DrawHud () {
    ObjectStoredText = sprites.create(img`
1 1 . . 1 . . . 1 . . . 1 1 . 1 . 1 
1 . 1 . 1 . . 1 . 1 . 1 . . . 1 . 1 
1 . 1 . 1 . . 1 . 1 . 1 . . . 1 . 1 
1 1 . . 1 . . 1 . 1 . 1 . . . 1 1 . 
1 . 1 . 1 . . 1 . 1 . 1 . . . 1 . 1 
1 . 1 . 1 . . 1 . 1 . 1 . . . 1 . 1 
1 1 . . 1 1 . . 1 . . . 1 1 . 1 . 1 
`, SpriteKind.HudBarTop)
    ObjectStoredText.setPosition(40, 8)
    ObjectStoredText.setFlag(SpriteFlag.RelativeToCamera, true)
    ObjectStoredText.z = 1
    SnailCountHud = sprites.create(img`
. 1 1 . 1 . . 1 . . 1 . . 1 . 1 . . . 1 1 
1 . . . 1 1 . 1 . 1 . 1 . 1 . 1 . . 1 . . 
1 . . . 1 1 . 1 . 1 . 1 . 1 . 1 . . 1 . . 
. 1 . . 1 . 1 1 . 1 . 1 . 1 . 1 . . . 1 . 
. . 1 . 1 . 1 1 . 1 1 1 . 1 . 1 . . . . 1 
. . 1 . 1 . 1 1 . 1 . 1 . 1 . 1 . . . . 1 
1 1 . . 1 . . 1 . 1 . 1 . 1 . 1 1 . 1 1 . 
`, SpriteKind.HudBarTop)
    SnailCountHud.setPosition(110, 8)
    SnailCountHud.setFlag(SpriteFlag.RelativeToCamera, true)
    SnailCountHud.z = 1
    OutOf10 = sprites.create(img`
. . . 1 . . . 1 . . . 1 . 
. . . 1 . . 1 1 . . 1 . 1 
. . 1 . . . . 1 . . 1 . 1 
. . 1 . . . . 1 . . 1 . 1 
. . 1 . . . . 1 . . 1 . 1 
. 1 . . . . . 1 . . 1 . 1 
. 1 . . . . 1 1 1 . . 1 . 
`, SpriteKind.HudBarTop)
    OutOf10.setPosition(141, 8)
    OutOf10.setFlag(SpriteFlag.RelativeToCamera, true)
    OutOf10.z = 1
    SnailCounter = sprites.create(img`
. 1 . . 
1 . 1 . 
1 . 1 . 
1 . 1 . 
1 . 1 . 
1 . 1 . 
. 1 . . 
`, SpriteKind.HudBarTop)
    SnailCounter.setFlag(SpriteFlag.RelativeToCamera, true)
    SnailCounter.setPosition(133, 8)
    SnailCounter.z = 1
    HudBar = sprites.create(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`, SpriteKind.HudBarTop)
    HudBar.setPosition(80, 8)
    HudBar.setFlag(SpriteFlag.RelativeToCamera, true)
    StoredObjectSpace = sprites.create(img`
1 1 1 1 . . . . 1 1 1 1 
1 . . . . . . . . . . 1 
1 . . . . . . . . . . 1 
1 . . . . . . . . . . 1 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
1 . . . . . . . . . . 1 
1 . . . . . . . . . . 1 
1 . . . . . . . . . . 1 
1 1 1 1 . . . . 1 1 1 1 
`, SpriteKind.HudStoredObject)
    StoredObjectSpace.setPosition(57, 8)
    StoredObjectSpace.setFlag(SpriteFlag.RelativeToCamera, true)
    BlockStore = 0
    thePlayer.z = 1
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(controller.down.isPressed())) {
        if (jumpsRemaining > 0) {
            if (jumpsRemaining == 2) {
                thePlayer.vy = -120
            }
            if (jumpsRemaining == 1) {
                thePlayer.vy = -140
            }
            pause(200)
            jumpsRemaining += -1
        }
    }
})
sprites.onDestroyed(SpriteKind.TheTNT, function (sprite) {
    TNTExplode = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Explosion)
    TNTExplode.setPosition(TNTx, TNTy)
    TNTExplode.lifespan = 500
    animation.runImageAnimation(
    TNTExplode,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . 3 4 4 4 4 4 4 3 . . . . 
. . . 3 4 4 4 4 4 4 4 4 3 . . . 
. . 3 4 4 4 4 4 4 4 4 4 4 3 . . 
. 3 4 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 3 4 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 3 4 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 3 4 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 3 4 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 3 4 4 4 4 4 4 4 4 4 4 4 4 3 . 
. . 3 4 4 4 4 4 4 4 4 4 4 3 . . 
. . . 3 4 4 4 4 4 4 4 4 3 . . . 
. . . . 3 4 4 4 4 4 4 3 . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . 3 3 4 4 4 4 4 4 3 3 . . . 
. . 3 3 4 4 4 4 4 4 4 4 3 3 . . 
. 3 3 4 4 4 4 4 4 4 4 4 4 3 3 . 
3 3 4 4 4 4 4 4 4 4 4 4 4 4 3 3 
3 4 4 4 4 4 . . . . 4 4 4 4 4 3 
3 4 4 4 4 . . . . . . 4 4 4 4 3 
3 4 4 4 4 . . . . . . 4 4 4 4 3 
3 4 4 4 4 . . . . . . 4 4 4 4 3 
3 4 4 4 4 . . . . . . 4 4 4 4 3 
3 4 4 4 4 4 . . . . 4 4 4 4 4 3 
3 3 4 4 4 4 4 4 4 4 4 4 4 4 3 3 
. 3 3 4 4 4 4 4 4 4 4 4 4 3 3 . 
. . 3 3 4 4 4 4 4 4 4 4 3 3 . . 
. . . 3 3 4 4 4 4 4 4 3 3 . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . 4 . . 3 . . . 4 . . . 4 . . 
. . . 4 . . . . . . . . 3 . . 4 
. . 4 . . . 4 . . . . 4 . . . . 
. . . . 4 . . . . 2 . . . . . . 
4 . . . . . 2 4 . . . 4 . 2 . . 
. . . . . . . . 4 . . . . . . . 
. . 3 . 2 . 2 . . 4 . 2 . . 3 . 
. . . . . . . 4 . . . . . . . . 
. . . 4 . . . . . . . 4 . . . . 
. 4 . . . 3 . 2 . 4 . . . 2 . . 
. . . 4 . . . . . . . 3 . . . . 
. 4 . . . . . . . . . . . 4 . . 
. . . . 2 . . 4 . 2 . . 4 . 4 . 
. . 4 . . . . . . . 4 . . . . . 
. 4 . . . . . . . . . . 4 . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Snail, SpriteKind.TheSnailExit, function (sprite, otherSprite) {
    SnailsRemaining += -1
    sprite.destroy()
    animation.runImageAnimation(
    otherSprite,
    [img`
. . . . . 2 2 2 2 2 . . . . . 
. . . . 2 4 4 4 4 4 3 . . . . 
. . . 2 4 4 4 4 4 4 4 3 . . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
1 4 1 4 4 4 4 4 4 4 4 4 4 4 3 
1 1 1 4 4 4 4 4 4 4 4 4 4 4 3 
1 3 1 4 4 4 4 4 4 4 4 4 4 4 3 
4 3 1 4 4 4 4 4 4 4 4 4 4 4 3 
4 1 4 4 4 4 4 4 4 4 4 4 4 4 3 
4 1 4 4 4 4 4 4 4 4 4 4 4 4 3 
1 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
`,img`
. . . . . 2 2 2 2 2 . . . . . 
. . . . 2 4 4 4 4 4 3 . . . . 
. . . 2 4 4 4 4 4 4 4 3 . . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
1 4 4 1 4 1 4 4 4 4 4 4 4 4 3 
3 1 4 1 1 1 4 4 4 4 4 4 4 4 3 
3 1 4 1 3 1 4 4 4 4 4 4 4 4 3 
3 1 1 3 3 1 4 4 4 4 4 4 4 4 3 
3 1 3 4 1 4 4 4 4 4 4 4 4 4 3 
1 1 4 4 1 4 4 4 4 4 4 4 4 4 3 
1 1 1 1 4 4 4 4 4 4 4 4 4 4 3 
`,img`
. . . . . 2 2 2 2 2 . . . . . 
. . . . 2 4 4 4 4 4 3 . . . . 
. . . 2 4 4 4 4 4 4 4 3 . . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 1 1 1 1 1 4 4 1 4 1 4 4 4 3 
1 3 3 3 3 3 1 4 1 1 1 4 4 4 3 
1 4 1 1 1 3 1 4 1 3 1 4 4 4 3 
1 4 1 3 3 3 1 1 3 3 1 4 4 4 3 
1 4 4 1 1 3 1 3 4 1 4 4 4 4 3 
1 4 4 4 4 1 1 4 4 1 4 4 4 4 3 
1 1 1 1 1 1 1 1 1 4 4 4 4 4 3 
`,img`
. . . . . 2 2 2 2 2 . . . . . 
. . . . 2 4 4 4 4 4 3 . . . . 
. . . 2 4 4 4 4 4 4 4 3 . . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 1 1 1 1 1 4 4 1 4 1 4 3 
2 4 1 3 3 3 3 3 1 4 1 1 1 4 3 
2 4 1 4 1 1 1 3 1 4 1 3 1 4 3 
2 4 1 4 1 3 3 3 1 1 3 3 1 4 3 
1 1 1 4 4 1 1 3 1 3 4 1 4 4 3 
4 3 1 4 4 4 4 1 1 4 4 1 4 4 3 
1 1 1 1 1 1 1 1 1 1 1 4 4 4 3 
`,img`
. . . . . 2 2 2 2 2 . . . . . 
. . . . 2 4 4 4 4 4 3 . . . . 
. . . 2 4 4 4 4 4 4 4 3 . . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 1 1 1 1 1 4 4 1 4 1 3 
2 4 4 1 3 3 3 3 3 1 4 1 1 1 3 
2 4 4 1 4 1 1 1 3 1 4 1 3 1 3 
2 4 4 1 4 1 3 3 3 1 1 3 3 1 3 
2 1 1 1 4 4 1 1 3 1 3 4 1 4 3 
1 4 3 1 4 4 4 4 1 1 4 4 1 4 3 
1 1 1 1 1 1 1 1 1 1 1 1 4 4 3 
`,img`
. . . . . 2 2 2 2 2 . . . . . 
. . . . 2 4 4 4 4 4 3 . . . . 
. . . 2 4 4 4 4 4 4 4 3 . . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
`,img`
. . . . . 2 2 2 2 2 . . . . . 
. . . . 2 4 4 4 4 4 3 . . . . 
. . . 2 4 4 4 4 4 4 4 3 . . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. . 2 4 4 4 4 4 4 4 4 4 3 . . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
. 2 4 4 4 4 4 4 4 4 4 4 4 3 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
`],
    100,
    false
    )
    if (SnailsRemaining < 1) {
        game.splash("Next Level")
        Level += 1
        pause(1000)
        ChangeLevel()
    }
})
sprites.onCreated(SpriteKind.TheTNT, function (sprite) {
    sprite.setPosition(thePlayer.x, thePlayer.y + 2)
    sprite.lifespan = 5000
    TNTx = sprite.x
    TNTy = sprite.y
    for (let index = 0; index < 2; index++) {
        pause(500)
        sprite.setFlag(SpriteFlag.Invisible, true)
        pause(100)
        sprite.setFlag(SpriteFlag.Invisible, false)
        pause(500)
    }
    for (let index = 0; index < 3; index++) {
        pause(200)
        sprite.setFlag(SpriteFlag.Invisible, true)
        pause(100)
        sprite.setFlag(SpriteFlag.Invisible, false)
        pause(200)
    }
    for (let index = 0; index < 8; index++) {
        pause(50)
        sprite.setFlag(SpriteFlag.Invisible, true)
        pause(25)
        sprite.setFlag(SpriteFlag.Invisible, false)
        pause(50)
    }
})
function AddScenery () {
    for (let value of tiles.getTilesByType(myTiles.tile11)) {
        tiles.placeOnRandomTile(thePlayer, myTiles.tile11)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile14)) {
        smallBush = sprites.create(myTiles.tile14, SpriteKind.Scenery)
        tiles.placeOnTile(smallBush, value)
        tiles.setTileAt(value, myTiles.tile0)
        smallBush.z = 2
    }
    for (let value of tiles.getTilesByType(myTiles.tile15)) {
        TreeTopLeft = sprites.create(myTiles.tile15, SpriteKind.Scenery)
        tiles.placeOnTile(TreeTopLeft, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile16)) {
        BushLeft = sprites.create(myTiles.tile16, SpriteKind.Scenery)
        tiles.placeOnTile(BushLeft, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile16)) {
        BushRight = sprites.create(myTiles.tile16, SpriteKind.Scenery)
        tiles.placeOnTile(BushRight, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile17)) {
        TreeTopLeft = sprites.create(myTiles.tile17, SpriteKind.Scenery)
        tiles.placeOnTile(TreeTopLeft, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile18)) {
        TreeTopRight = sprites.create(myTiles.tile18, SpriteKind.Scenery)
        tiles.placeOnTile(TreeTopRight, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile19)) {
        TreeMiddleLeft = sprites.create(myTiles.tile19, SpriteKind.Scenery)
        tiles.placeOnTile(TreeMiddleLeft, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile20)) {
        TreeMiddleRight = sprites.create(myTiles.tile20, SpriteKind.Scenery)
        tiles.placeOnTile(TreeMiddleRight, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile21)) {
        TreeBottomLeft = sprites.create(myTiles.tile21, SpriteKind.Scenery)
        tiles.placeOnTile(TreeBottomLeft, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile22)) {
        TreeBottomRight = sprites.create(myTiles.tile22, SpriteKind.Scenery)
        tiles.placeOnTile(TreeBottomRight, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile24)) {
        gateLeft = sprites.create(myTiles.tile24, SpriteKind.Scenery)
        tiles.placeOnTile(gateLeft, value)
        tiles.setTileAt(value, myTiles.tile0)
        gateLeft.z = 2
    }
    for (let value of tiles.getTilesByType(myTiles.tile25)) {
        gateRight = sprites.create(myTiles.tile25, SpriteKind.Scenery)
        tiles.placeOnTile(gateRight, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile26)) {
        SnailEntrance = sprites.create(myTiles.tile26, SpriteKind.SnailEntrance)
        tiles.placeOnTile(SnailEntrance, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
    for (let value of tiles.getTilesByType(myTiles.tile27)) {
        SnailExit = sprites.create(myTiles.tile27, SpriteKind.TheSnailExit)
        tiles.placeOnTile(SnailExit, value)
        tiles.setTileAt(value, myTiles.tile0)
    }
}
let SnailAnimFrame = 0
let playerTileColumn = 0
let playerTileRow = 0
let FlipHoriz = 0
let GlidingAnim = 0
let animationFrame = 0
let SnailSprite: Sprite = null
let SnailExit: Sprite = null
let SnailEntrance: Sprite = null
let gateRight: Sprite = null
let gateLeft: Sprite = null
let TreeBottomRight: Sprite = null
let TreeBottomLeft: Sprite = null
let TreeMiddleRight: Sprite = null
let TreeMiddleLeft: Sprite = null
let TreeTopRight: Sprite = null
let BushRight: Sprite = null
let BushLeft: Sprite = null
let TreeTopLeft: Sprite = null
let smallBush: Sprite = null
let TNTy = 0
let TNTx = 0
let TNTExplode: Sprite = null
let jumpsRemaining = 0
let BlockStore = 0
let StoredObjectSpace: Sprite = null
let HudBar: Sprite = null
let SnailCounter: Sprite = null
let OutOf10: Sprite = null
let SnailCountHud: Sprite = null
let ObjectStoredText: Sprite = null
let TNT: Sprite = null
let Right = 0
let projectile: Sprite = null
let itemCount = 0
let SnailsSpawned = 0
let SnailsRemaining = 0
let LevelWidth = 0
let Level = 0
let thePlayer: Sprite = null
color.setColor(1, color.rgb(45, 27, 0))
color.setColor(2, color.rgb(30, 96, 110))
color.setColor(3, color.rgb(90, 185, 168))
color.setColor(4, color.rgb(196, 240, 194))
color.setColor(5, color.rgb(152, 183, 152))
scene.setBackgroundColor(5)
thePlayer = sprites.create(img`
. . . . . . . . . 1 . . 1 . . . 
. . . . . . . . 1 . . 1 . . . . 
. . . . . . . . 4 1 1 4 . . . . 
. . . . . . . . 4 4 4 4 . . . . 
. . . . 2 2 2 1 4 1 4 1 . . . . 
. . . . 1 2 2 2 4 4 4 . . . . . 
. . . 2 2 2 1 4 3 2 3 4 . . . . 
. . . 2 1 2 2 3 3 3 2 . . . . . 
. . 1 2 2 2 4 4 1 4 4 1 . . . . 
. . 2 2 1 2 4 4 1 4 4 . 1 . . . 
. . 2 2 1 2 3 3 2 1 . . . 1 . . 
. . . 2 2 2 4 4 4 4 1 . . . . . 
. . . . 2 . 1 4 4 1 . . . . . . 
. . . . . . 1 . 1 . . . . . . . 
. . . . . 1 . . 1 . . . . . . . 
. . . . . 1 1 . 1 1 . . . . . . 
`, SpriteKind.Player)
scene.cameraFollowSprite(thePlayer)
Level = 2
ChangeLevel()
DrawHud()
let SnailCountImage = [img`
. 1 . . 
1 . 1 . 
1 . 1 . 
1 . 1 . 
1 . 1 . 
1 . 1 . 
. 1 . . 
`, img`
. 1 . . 
1 1 . . 
. 1 . . 
. 1 . . 
. 1 . . 
. 1 . . 
1 1 1 . 
`, img`
. 1 . . 
1 . 1 . 
. . 1 . 
. 1 . . 
1 . . . 
1 . . . 
1 1 1 . 
`, img`
. 1 . . 
1 . 1 . 
. . 1 . 
. 1 . . 
. . 1 . 
1 . 1 . 
. 1 . . 
`, img`
. . 1 . 
. 1 . . 
. 1 . . 
1 . . . 
1 . 1 . 
1 1 1 1 
. . 1 . 
`, img`
1 1 1 . 
1 . . . 
1 . . . 
. 1 . . 
. . 1 . 
. . 1 . 
1 1 . . 
`, img`
. 1 1 . 
1 . . . 
1 . . . 
1 1 1 . 
1 . . 1 
1 . . 1 
. 1 1 . 
`, img`
1 1 1 . 
. . 1 . 
. . 1 . 
. 1 . . 
. 1 . . 
1 . . . 
1 . . . 
`, img`
. 1 . . 
1 . 1 . 
1 . 1 . 
. 1 . . 
1 . 1 . 
1 . 1 . 
. 1 . . 
`, img`
. 1 . . 
1 . 1 . 
1 . 1 . 
. 1 1 . 
. . 1 . 
. . 1 . 
. 1 . . 
`, img`
. 1 . . 1 . . 
1 1 . 1 . 1 . 
. 1 . 1 . 1 . 
. 1 . 1 . 1 . 
. 1 . 1 . 1 . 
. 1 . 1 . 1 . 
1 1 1 . 1 . . 
`]
game.onUpdateInterval(2000, function () {
    if (SnailsSpawned < 10) {
        for (let value of sprites.allOfKind(SpriteKind.SnailEntrance)) {
            SnailSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 1 . 1 . . 1 1 1 1 1 . . . . . 
. 1 1 1 . 1 3 3 3 3 3 1 . . . . 
. 1 3 1 . 1 2 1 1 1 3 1 . . . . 
. 1 3 4 1 1 2 2 2 1 2 1 . . . . 
. . 1 3 4 1 2 1 1 2 2 1 1 1 . . 
. . 1 3 4 1 1 2 2 2 2 1 4 3 1 . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
`, SpriteKind.Snail)
            SnailSprite.setPosition(value.x, value.y)
            SnailsSpawned += 1
        }
        for (let value of sprites.allOfKind(SpriteKind.Snail)) {
            sprites.setDataNumber(value, "Gravity", 8)
            sprites.setDataNumber(value, "Right", 1)
            sprites.setDataNumber(value, "Home", 0)
        }
    }
})
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        thePlayer.vx += 23
    }
    if (controller.left.isPressed()) {
        thePlayer.vx += -23
    }
    thePlayer.vx = thePlayer.vx * 0.8
    thePlayer.vy += 8
    thePlayer.setImage(img`
. . . . . . . . . . 1 . . 1 . . 
. . . . . . . . . 1 . . 1 . . . 
. . . . . . . . 1 2 . 2 4 . . . 
. . . . . 2 2 2 4 4 4 4 . . . . 
. . . 2 2 2 1 2 4 1 4 1 . . . . 
. . . 1 1 2 2 2 4 4 4 4 . . . . 
. . . 1 1 2 1 2 3 3 2 2 . . . . 
. . . 2 2 2 2 2 4 1 3 . . . . . 
. . . 2 1 1 2 2 3 3 1 4 . . . . 
. . . 2 1 1 2 3 3 3 1 3 . . . . 
. . . . 2 2 2 3 3 3 4 1 . . . . 
. . . . 1 . 2 4 4 4 3 . 1 . . . 
. . . . 1 . 3 3 3 3 . . . . . . 
. . . . . . 1 . . 1 . . . . . . 
. . . . . . 1 . . 1 . . . . . . 
. . . . . . 1 . 1 . . . . . . . 
. . . . . . 1 . 1 . . . . . . . 
. . . . . . 1 . 1 . . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
`)
    if (animationFrame == 1) {
        thePlayer.setImage(img`
. . . . . . . . . . 1 . . 1 . . 
. . . . . . . . . 1 . . 1 . . . 
. . . . . . . . 1 2 . 2 4 . . . 
. . . . . 2 2 2 4 4 4 4 . . . . 
. . . 2 2 2 1 2 4 1 4 1 . . . . 
. . . 1 1 2 2 2 4 4 4 4 . . . . 
. . . 1 1 2 1 2 3 3 2 2 . . . . 
. . . 2 2 2 2 2 4 1 3 3 3 . . . 
. . . 2 1 1 2 2 3 3 1 4 3 . . . 
. . . 2 1 1 2 3 3 3 1 3 . . . . 
. . . . 2 2 2 3 3 3 4 1 . . . . 
. . . . 1 . 2 4 4 4 3 . 1 . . . 
. . . 1 . . 3 3 3 3 . . . . . . 
. . . 1 . . . 1 . 1 . . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . . 1 . 1 . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
`)
    }
    if (animationFrame == 2) {
        thePlayer.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 1 1 . 1 1 . . . 
. . . . . . . 1 2 . 2 4 . . . . 
. . . . 2 2 2 4 4 4 4 . . . . . 
. . 2 2 2 1 2 4 1 4 1 . . . . . 
. . 1 1 2 2 2 4 4 4 4 . . . . . 
. . 1 1 2 1 2 3 3 2 2 . . 1 . . 
. . 2 2 2 3 2 4 1 3 3 3 1 . . . 
. . 2 1 1 2 2 3 3 1 1 1 . . . . 
. . 2 1 1 2 3 3 3 3 3 . . . . . 
. . . 2 2 2 3 3 3 4 3 . . . . . 
. . . . . 2 4 4 4 3 . . . . . . 
. . . . . 3 1 3 3 . . . . . . . 
. . . . . . 1 . 1 1 . . . . . . 
. . . 1 . . 1 . . 1 . . . . . . 
. . . . 1 1 . . . . 1 . . . . . 
. . . . . . . . . . 1 . . . . . 
. . . . . . . . . 1 . . . . . . 
`)
    }
    if (animationFrame == 3) {
        thePlayer.setImage(img`
. . . . . . . . . 1 . . 1 . . . 
. . . . . . . . 1 . . 1 . . . . 
. . . . . . . 1 2 . 2 4 . . . . 
. . . . . 2 2 4 4 4 4 . . . . . 
. . . 2 2 1 2 4 1 4 1 . . . . . 
. . . 1 2 2 2 4 4 4 4 . . . . . 
. . . 1 2 1 2 3 3 2 2 . . . . . 
. . . 2 2 2 2 4 1 3 3 3 . . . . 
. . . 2 2 2 2 3 1 3 4 3 . . . . 
. . . 1 1 2 3 3 1 3 3 . . . . . 
. . . . 2 2 3 3 3 1 3 2 . . . . 
. . . 3 . 2 4 4 4 3 1 1 . . . . 
. . . . . 3 3 1 3 1 . . . . . . 
. . . . . . . . 1 1 . . . . . . 
. . . . . . . . 1 1 . . . . . . 
. . . . . 1 1 . 1 1 . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
`)
    }
    if (animationFrame == 4) {
        thePlayer.setImage(img`
. . . . . . . . . . . . 1 . . . 
. . . . . . . . 1 1 . 1 . . . . 
. . . . . . . 1 2 . 2 4 . . . . 
. . . . 2 2 2 4 4 4 4 . . . . . 
. . 2 2 2 1 2 4 1 4 1 . . . . . 
. . 1 1 2 2 2 4 4 4 4 . . . . . 
. . 1 1 2 1 2 3 3 2 2 . . . . . 
. . 2 2 2 2 2 4 1 3 3 . . . . . 
. . 2 1 1 2 2 1 3 3 4 2 . 2 . . 
. . 2 1 1 2 1 3 3 3 3 2 2 . . . 
. . . 2 2 2 1 3 3 4 3 . . . . . 
. . . . . 2 1 4 4 3 . . . . . . 
. . . . . 3 3 1 3 1 1 1 . . . . 
. . . . . . . 1 1 . . 1 1 . . . 
. . . . . . 1 1 . . . . 1 . . . 
. . . . . . 1 . . . . 1 . . . . 
. . . . . 1 1 . . . 1 . . . . . 
. . . . . 1 . . . . . . . . . . 
. . . . . 1 1 . . . . . . . . . 
`)
    }
    if (thePlayer.vy < 0 && jumpsRemaining == 2) {
        thePlayer.setImage(img`
. . . . . . . . . . . . 1 . . . 
. . . . . . . . 1 1 . 1 . . . . 
. . . . . . . 1 2 . 2 4 . . . . 
. . . . 2 2 2 4 4 4 4 . . 2 . . 
. . 2 2 2 1 2 4 1 4 1 2 . . . . 
. . 1 1 2 2 2 4 4 4 4 . . 2 . . 
. . 1 1 2 1 2 3 3 2 2 . 2 2 . . 
. . 2 2 2 2 2 4 1 3 3 2 2 . . . 
. . 2 1 1 2 2 1 3 3 4 . . . . . 
. . 2 1 1 2 1 3 3 3 3 . . . . . 
. . . 2 2 2 1 3 3 4 3 . . . . . 
. . . . . 2 1 4 4 3 . . . . . . 
. . . . . 3 3 1 3 1 1 1 . . . . 
. . . . . . . 1 1 . . 1 1 . . . 
. . . . . . 1 1 . . . . 1 . . . 
. . . 1 . . 1 . . . . 1 . . . . 
. . . . 1 1 1 . . . 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
    if (thePlayer.vy < 0 && jumpsRemaining == 1) {
        thePlayer.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 1 1 . 1 . . . . 
. . . . . . . 1 2 . 2 4 . . . . 
. . . . . . . 4 4 4 4 . . . . . 
. . . . 2 1 2 4 1 4 1 2 . . . . 
. . . 1 2 2 2 4 4 4 4 . . 2 . . 
. . 1 1 2 1 2 3 3 2 2 . . 2 . . 
. . 2 2 2 2 2 4 1 3 3 . . 2 . . 
. . 2 1 1 2 2 1 3 3 4 2 . . . . 
. . 2 1 1 2 1 3 3 3 3 . . . . . 
. . . 2 2 2 1 3 3 4 3 . . . . . 
. . . . . 2 1 4 4 3 . . . . . . 
. . . . . 3 3 1 3 1 . . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . . 1 . . 1 . . . . . 
. . . . . . 1 . . 1 . . . . . . 
. . . . . . 1 . 1 . . . . . . . 
. . . . . 1 . . 1 . . . . . . . 
. . . . . . 1 . . . . . . . . . 
`)
    }
    if (thePlayer.vy > 0 && !(thePlayer.isHittingTile(CollisionDirection.Bottom))) {
        thePlayer.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 1 1 . 1 . . . . 
. . . . . . . 1 2 . 2 4 1 . . . 
. . . . . . . 4 4 4 4 . . . . . 
. . . . 2 2 2 4 1 4 1 . 2 . . . 
. . . 1 2 2 2 4 4 4 4 . . 2 . . 
. . 1 1 2 1 2 3 3 2 2 . 2 . . . 
. . 2 2 2 1 2 4 1 3 3 2 2 . . . 
. . 2 2 2 2 2 1 3 3 4 . . . . . 
. . 2 1 1 2 1 3 3 3 3 . . . . . 
. . . 1 1 2 1 3 3 4 3 . . . . . 
. . . . . 2 1 4 4 3 . . . . . . 
. . . . . 3 3 1 3 1 1 1 . 1 . . 
. . . . . . 1 1 . . . . 1 . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . 1 . . . . . . . 
. . . . . . . . . 1 . . . . . . 
`)
    }
    if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
        jumpsRemaining = 2
    }
    if (jumpsRemaining == 0 && controller.A.isPressed()) {
        thePlayer.vy = 15
        if (GlidingAnim == 1) {
            thePlayer.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 3 3 4 4 . 
. . . . . . . . . 3 3 3 4 4 3 3 
. . 4 4 4 . . . 3 3 1 1 4 1 3 3 
. 3 3 3 4 4 . . 3 1 2 3 2 4 1 3 
. 4 4 3 3 3 4 . 3 4 4 4 4 3 3 3 
4 4 4 4 4 4 2 2 2 4 1 4 1 3 2 3 
4 4 4 4 4 1 2 2 2 4 4 4 4 3 3 2 
. 4 4 4 1 1 2 1 2 3 3 2 2 3 2 . 
. . 4 4 2 2 2 1 2 4 1 3 3 2 2 . 
. . . . 2 2 2 2 2 1 3 3 4 . . . 
. . . . 2 1 1 2 1 3 3 3 3 . . . 
. . . . . 1 1 2 1 3 3 4 3 . . . 
. . . . . . . 2 1 4 4 3 . . . . 
. . . . . . . 3 3 1 3 1 1 . . . 
. . . . . . . . 1 1 . . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . . . 1 . . . 1 . 
. . . . . . . . . . . . . . . . 
`)
        }
        if (GlidingAnim == 2) {
            thePlayer.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 3 3 3 3 . 
. . . . . . . . . . 3 1 4 4 1 3 
. . . . . . . . . 3 1 3 4 1 3 3 
. . . . . . . . 3 1 2 3 2 3 3 3 
. . . 4 4 4 4 . 3 4 4 4 4 3 3 3 
. 4 4 4 4 4 2 2 2 4 1 4 1 3 3 . 
4 4 3 3 4 1 2 2 2 4 4 4 4 2 . . 
3 3 4 4 1 1 2 1 2 3 3 2 2 . 2 . 
3 4 4 4 2 2 2 1 2 4 1 3 3 2 2 . 
4 4 4 4 2 2 2 2 2 1 3 3 4 . . . 
. 4 4 . 2 1 1 2 1 3 3 3 3 . . . 
. . . . . 1 1 2 1 3 3 4 3 . . . 
. . . . . . . 2 1 4 4 3 . . . . 
. . . . . . . 3 3 1 3 1 1 . . . 
. . . . . . . . 1 1 . . . 1 . . 
. . . . . . . . . 1 . . . 1 . . 
. . . . . . . . 1 . . . 1 . . . 
. . . . . . . . . . . . . . . . 
`)
        }
    }
    if (FlipHoriz == 1) {
        thePlayer.image.flipX()
    }
    if (controller.left.isPressed()) {
        FlipHoriz = 1
        Right = -1
    } else {
        if (controller.right.isPressed()) {
            FlipHoriz = 0
            Right = 1
        }
    }
    if (BlockStore == 0) {
        StoredObjectSpace.setImage(img`
1 1 1 1 . . . . 1 1 1 1 
1 . . . . . . . . . . 1 
1 . . . . . . . . . . 1 
1 . . . . . . . . . . 1 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
1 . . . . . . . . . . 1 
1 . . . . . . . . . . 1 
1 . . . . . . . . . . 1 
1 1 1 1 . . . . 1 1 1 1 
`)
    } else {
        StoredObjectSpace.setImage(img`
1 1 1 1 . . . . 1 1 1 1 
1 . 3 3 3 3 4 4 4 4 . 1 
1 3 3 1 1 1 1 1 1 4 4 1 
1 3 1 2 2 2 2 2 2 1 4 1 
. 3 1 2 2 4 3 2 2 1 2 . 
. 3 1 2 4 3 3 3 2 1 2 . 
. 3 1 2 2 4 3 2 2 1 2 . 
. 4 1 2 2 4 3 2 2 1 2 . 
1 4 1 2 2 2 2 2 2 1 2 1 
1 4 4 1 1 1 1 1 1 2 2 1 
1 . 4 4 4 2 2 2 2 2 . 1 
1 1 1 1 . . . . 1 1 1 1 
`)
    }
    playerTileRow = thePlayer.y / 16
    playerTileColumn = thePlayer.x / 16
    for (let value of sprites.allOfKind(SpriteKind.Snail)) {
        value.vx = 15 * sprites.readDataNumber(value, "Right")
        value.vy += sprites.readDataNumber(value, "Gravity")
        value.setImage(img`
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
1 . 1 . . 1 1 1 1 1 . . . . 
1 1 1 . 1 3 3 3 3 3 1 . . . 
1 3 1 . 1 2 1 1 1 3 1 . . . 
1 3 4 1 1 2 2 2 1 2 1 . . . 
. 1 3 4 1 2 1 1 2 2 1 1 1 . 
. 1 3 4 1 1 2 2 2 2 1 4 3 1 
. . 1 1 1 1 1 1 1 1 1 1 1 1 
`)
        if (SnailAnimFrame == 1) {
            value.setImage(img`
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
1 . 1 . . 1 1 1 1 1 . . . . 
1 1 1 . 1 3 3 3 3 3 1 . . . 
1 3 1 . 1 2 1 1 1 3 1 . . . 
1 3 4 1 1 2 2 2 1 2 1 . . . 
. 1 3 4 1 2 1 1 2 2 1 1 1 . 
. 1 3 4 1 1 2 2 2 2 1 4 3 1 
. . 1 1 1 1 1 1 1 1 1 1 1 1 
`)
        }
        if (SnailAnimFrame == 2) {
            value.setImage(img`
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
1 . 1 . . . 1 1 1 1 1 . . . . 
1 1 1 . . 1 3 3 3 3 3 1 . . . 
1 3 1 . . 1 2 1 1 1 3 1 . . . 
1 3 4 1 1 1 2 2 2 1 2 1 . . . 
. 1 3 3 4 1 2 1 1 2 2 1 1 . . 
. 1 3 3 4 1 1 2 2 2 2 1 3 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . 
`)
        }
        if (sprites.readDataNumber(value, "Right") == 1) {
            value.image.flipX()
        }
    }
    SnailCounter.setImage(SnailCountImage[SnailsRemaining])
    if (SnailsRemaining == 10) {
        SnailCounter.x = 131
    } else {
        SnailCounter.x = 133
    }
})
forever(function () {
    if (controller.left.isPressed() || controller.right.isPressed()) {
        animationFrame += 1
        pause(100)
        if (animationFrame > 4) {
            animationFrame = 1
        }
    } else {
        animationFrame = 0
    }
    if (controller.right.isPressed() && controller.left.isPressed()) {
        animationFrame = 0
    }
})
forever(function () {
    GlidingAnim = 1
    pause(100)
    GlidingAnim = 2
    pause(100)
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Snail)) {
        if (value.tileKindAt(TileDirection.Left, myTiles.tile35) && value.isHittingTile(CollisionDirection.Left)) {
            sprites.setDataNumber(value, "Right", 1)
        }
        if (value.tileKindAt(TileDirection.Right, myTiles.tile34) && value.isHittingTile(CollisionDirection.Right)) {
            sprites.setDataNumber(value, "Right", -1)
        }
        if (value.tileKindAt(TileDirection.Left, myTiles.tile7) && value.isHittingTile(CollisionDirection.Left)) {
            sprites.setDataNumber(value, "Right", 1)
        }
        if (value.tileKindAt(TileDirection.Right, myTiles.tile5) && value.isHittingTile(CollisionDirection.Right)) {
            sprites.setDataNumber(value, "Right", -1)
        }
        if (value.tileKindAt(TileDirection.Right, myTiles.tile2) && value.isHittingTile(CollisionDirection.Right)) {
            if (value.isHittingTile(CollisionDirection.Bottom)) {
                sprites.setDataNumber(value, "Gravity", 0)
                for (let index = 0; index < 8; index++) {
                    value.y += -2
                    pause(20)
                }
                sprites.setDataNumber(value, "Gravity", 8)
            }
        }
        if (value.tileKindAt(TileDirection.Left, myTiles.tile4) && value.isHittingTile(CollisionDirection.Left)) {
            if (value.isHittingTile(CollisionDirection.Bottom)) {
                sprites.setDataNumber(value, "Gravity", 0)
                for (let index = 0; index < 8; index++) {
                    value.y += -2
                    pause(20)
                }
                sprites.setDataNumber(value, "Gravity", 8)
            }
        }
        if (value.tileKindAt(TileDirection.Right, myTiles.tile23) && value.isHittingTile(CollisionDirection.Right)) {
            if (value.isHittingTile(CollisionDirection.Bottom)) {
                sprites.setDataNumber(value, "Gravity", 0)
                for (let index = 0; index < 8; index++) {
                    value.y += -2
                    pause(20)
                }
                sprites.setDataNumber(value, "Gravity", 8)
            }
        }
        if (value.tileKindAt(TileDirection.Left, myTiles.tile23) && value.isHittingTile(CollisionDirection.Left)) {
            if (value.isHittingTile(CollisionDirection.Bottom)) {
                sprites.setDataNumber(value, "Gravity", 0)
                for (let index = 0; index < 8; index++) {
                    value.y += -2
                    pause(20)
                }
                sprites.setDataNumber(value, "Gravity", 8)
            }
        }
    }
})
forever(function () {
    if (controller.down.isPressed() && controller.A.isPressed()) {
        if (BlockStore == 0) {
            if (thePlayer.tileKindAt(TileDirection.Bottom, myTiles.tile23)) {
                for (let value of tiles.getTilesByType(myTiles.tile23)) {
                    tiles.setTileAt(value, myTiles.tile0)
                    tiles.setWallAt(value, false)
                    pause(200)
                    BlockStore = 1
                }
            }
        } else {
            if (BlockStore > 0) {
                if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
                    if (BlockStore == 1) {
                        if (FlipHoriz == 1) {
                            if (thePlayer.tileKindAt(TileDirection.Left, myTiles.tile0) && playerTileColumn >= 1) {
                                tiles.setTileAt(tiles.getTileLocation(Math.floor(playerTileColumn - 1), playerTileRow), myTiles.tile23)
                                tiles.setWallAt(tiles.getTileLocation(Math.floor(playerTileColumn - 1), playerTileRow), true)
                                pause(200)
                                BlockStore = 0
                            }
                        } else {
                            if (thePlayer.tileKindAt(TileDirection.Right, myTiles.tile0) && playerTileColumn < LevelWidth - 1) {
                                tiles.setTileAt(tiles.getTileLocation(Math.ceil(playerTileColumn + 0), playerTileRow), myTiles.tile23)
                                tiles.setWallAt(tiles.getTileLocation(Math.ceil(playerTileColumn + 0), playerTileRow), true)
                                pause(200)
                                BlockStore = 0
                            }
                        }
                    }
                }
            }
        }
    }
    if (thePlayer.tileKindAt(TileDirection.Bottom, myTiles.tile36)) {
        for (let value of tiles.getTilesByType(myTiles.tile36)) {
            pause(200)
            tiles.setTileAt(value, myTiles.tile32)
            tiles.setWallAt(value, true)
        }
    }
    if (thePlayer.tileKindAt(TileDirection.Bottom, myTiles.tile32)) {
        for (let value of tiles.getTilesByType(myTiles.tile32)) {
            pause(500)
            tiles.setTileAt(value, myTiles.tile37)
            tiles.setWallAt(value, true)
        }
    }
    if (thePlayer.tileKindAt(TileDirection.Bottom, myTiles.tile37)) {
        for (let value of tiles.getTilesByType(myTiles.tile37)) {
            pause(500)
            tiles.setTileAt(value, myTiles.tile0)
            tiles.setWallAt(value, false)
        }
    }
})
forever(function () {
    SnailAnimFrame = 1
    pause(200)
    SnailAnimFrame = 2
    pause(200)
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Snail)) {
        if (value.tileKindAt(TileDirection.Bottom, myTiles.tile28)) {
            value.vy = -50
            pause(300)
            value.setFlag(SpriteFlag.Invisible, true)
            pause(500)
            tiles.placeOnRandomTile(value, myTiles.tile31)
            value.y += -5
            value.x += 12
            value.setFlag(SpriteFlag.Invisible, false)
        }
    }
})

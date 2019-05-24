const ROW = 4
const COLUMN = 8

let mainColor
let subColor
let accColor
let backColor

const dots = new Array(ROW * COLUMN)

function setup() {
    createCanvas(1000, 1000)
    frameRate(30)
    background(0)
    noStroke()
    for (l = 0; l < 10; l++) {
        for (k = 0; k < 10; k++) {
            colorPick()
            for (i = k * 40; i < ROW * COLUMN + k * 40; i++) {

                randcol = Math.floor(Math.random() * 10)
                if (randcol < 4) {
                    fill(backColor)
                } else if (randcol < 7) {
                    fill(mainColor)
                } else if (randcol < 9) {
                    fill(subColor)
                } else {
                    fill(accColor)
                }
                rect((i % ROW) * 10 + (l * 90), Math.floor(i / ROW) * 10, 10, 10)
                rect((ROW - i % ROW) * 10 + ROW * 7.5 + (l * 90), Math.floor(i / ROW) * 10, 10, 10)
            }
        }
    }

}

function draw() {

}

function randomColor(array) {
    let newArray = []
    while (newArray.length < 3 && 0 < array.length) {
        const rand = Math.floor(Math.random() * array.length);
        newArray.push(array[rand]);
        array.splice(rand, 1);
    }
    return newArray
}

function colorPick() {
    const FC_COLOR = [color(98, 98, 98), color(187, 187, 187), color(255, 255, 255), color(0, 24, 144), color(32, 86, 229), color(108, 116, 255), color(178, 213, 255), color(31, 0, 155), color(84, 52, 253), color(151, 136, 255), color(186, 184, 255), color(61, 0, 139), color(129, 34, 234), color(188, 119, 255), color(209, 186, 255), color(99, 0, 105), color(170, 35, 195), color(228, 116, 255), color(236, 188, 255), color(155, 0, 23), color(179, 38, 94), color(224, 107, 178), color(255, 191, 229), color(104, 12, 0), color(169, 67, 0), color(239, 134, 84), color(255, 202, 184), color(77, 42, 0), color(140, 95, 0), color(216, 161, 32), color(240, 213, 163), color(53, 75, 1), color(108, 124, 0), color(181, 186, 6), color(230, 228, 149), color(0, 98, 0), color(33, 145, 0), color(117, 205, 9), color(203, 243, 133), color(0, 102, 0), color(0, 151, 0), color(79, 212, 63), color(171, 243, 155), color(1, 89, 58), color(0, 141, 85), color(64, 205, 135), color(158, 232, 189), color(0, 73, 124), color(0, 127, 168), color(74, 196, 214), color(158, 230, 220), color(83, 83, 83), color(168, 171, 169)]
    let RGB = randomColor(FC_COLOR)
    mainColor = RGB[0]
    subColor = RGB[1]
    accColor = RGB[2]
    backColor = color(0, 0, 0)
}
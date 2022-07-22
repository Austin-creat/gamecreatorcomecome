let num = 0
let num1 = 0
input.onButtonPressed(Button.A, function () {
    num = randint(1, 6)
    if (num == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (num == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # . # #
            # . . . #
            # # # # #
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # # # # #
            # . . . #
            # # # # #
            `)
    }
    if (num == 4) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . . . #
            # # . # #
            # # # # #
            `)
    }
    if (num == 5) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # . # . #
            # # . # #
            # # # # #
            `)
    }
    if (num == 6) {
        basic.showLeds(`
            # # # # #
            # # . # #
            # # . # #
            # # . # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(randint(1, 20))
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    num1 = randint(1, 3)
    if (num1 == 1) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . .
            # . . . .
            `)
    }
    if (num1 == 2) {
        basic.showLeds(`
            . # # # .
            # . . . .
            . # # # .
            . . . . #
            . # # # .
            `)
    }
    if (num1 == 3) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # . . . #
            `)
    }
})

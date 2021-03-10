input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . # . .
            # . . . .
            # # . . #
            # . . # #
            # # . . .
            `)
        basic.showLeds(`
            . . # . .
            # . . . .
            # # . . #
            . # # . .
            # # . . .
            `)
        basic.showLeds(`
            . . # . .
            # . . . .
            . . # # .
            . # # . .
            # # . . .
            `)
        basic.showLeds(`
            . # . . .
            . # # # #
            . . # # .
            . # # . .
            # # . . .
            `)
        basic.showLeds(`
            # # . # #
            . # # # #
            . . # # .
            . # # . .
            # # . . .
            `)
        basic.showLeds(`
            # # . # #
            . # # # #
            . . # # .
            . # # . .
            . . # # #
            `)
        basic.showLeds(`
            # # . # #
            . # # # #
            . . # # .
            # . . # #
            . . # # #
            `)
        basic.showLeds(`
            # # . # #
            . # # # #
            # # . . #
            # . . # #
            . . # # #
            `)
        basic.showLeds(`
            # # . # #
            # . . . .
            # # . . #
            # . . # #
            . . # # #
            `)
        basic.showLeds(`
            . . # . .
            # . . . .
            # # . . #
            # . . # #
            . . # # #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    led.enable(false)
})
input.onButtonPressed(Button.AB, function () {
    led.enable(true)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(60000)
    basic.clearScreen()
})
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    # # # . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # .
    # # # . .
    # # . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # . .
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # . # #
    . # # # #
    . . # # .
    . # # . .
    # # . . .
    `)
basic.showLeds(`
    # # # # #
    . # # # #
    . . # # .
    . # # . .
    # # . . .
    `)
basic.showLeds(`
    # . . . #
    # # # # #
    . . # # .
    . # # . .
    # # . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    # # # # #
    . # # . .
    # # . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    # # # # #
    # # . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # # # # #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # . # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . # #
    # . . . #
    # # . # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # . # #
    # . . . #
    . . . . .
    # . . . #
    # # . # #
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . # # # .
    # . # . #
    # # . # #
    # . # . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . # . #
    # # . # #
    # . # . #
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    # . # . #
    # # . # #
    # . # . #
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    # . # . #
    # # . # #
    . . . . .
    . . # # #
    `)
basic.showLeds(`
    . # # # .
    # . # . #
    # # . # #
    . . . . .
    . . # # #
    `)
basic.showLeds(`
    . # # # .
    . . . . .
    # # . . #
    # . . # #
    . . # # #
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # # . . #
    # . . # #
    . . # # #
    `)
basic.showLeds(`
    . . # . .
    # . . . .
    # # . . #
    # . . # #
    . . # # #
    `)
basic.showLeds(`
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . # #
    . . . # .
    `)
basic.showLeds(`
    . . . # .
    . . . # #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # . . .
    # # . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # . . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . # . # .
    # . . . #
    . . . . .
    # . . . #
    . # . # .
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . # #
    # . . . #
    # # . # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . # #
    # . # . #
    # # . # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # . # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # . # #
    # . . . #
    # # . # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    . # # . .
    # # . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . . # # .
    . # # . .
    # # . . .
    `)
basic.showLeds(`
    # # # # #
    . # # # #
    . . # # .
    . # # . .
    # # . . .
    `)
basic.showLeds(`
    # # . # #
    . # # # #
    . . # # .
    . # # . .
    # # . . .
    `)
basic.showLeds(`
    # # . # #
    . # # # #
    . . # # .
    . # # . .
    . . # # #
    `)
basic.showLeds(`
    # # . # #
    . # # # #
    . . # # .
    # . . # #
    . . # # #
    `)
basic.showLeds(`
    # # . # #
    . # # # #
    # # . . #
    # . . # #
    . . # # #
    `)
basic.showLeds(`
    # # . # #
    # . # . .
    # # . . #
    # . . # #
    . . # # #
    `)
basic.showLeds(`
    # # . # #
    # . # . .
    # # . . #
    # . . # #
    . . # # #
    `)
basic.showLeds(`
    . . # . .
    # . . . .
    # # . . #
    # . . # #
    . . # # #
    `)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . # . .
        # . . . .
        # # . . #
        # . . # #
        # # . . .
        `)
    basic.showLeds(`
        . . # . .
        # . . . .
        # # . . #
        . # # . .
        # # . . .
        `)
    basic.showLeds(`
        . . # . .
        # . . . .
        . . # # .
        . # # . .
        # # . . .
        `)
    basic.showLeds(`
        . # . . .
        . # # # #
        . . # # .
        . # # . .
        # # . . .
        `)
    basic.showLeds(`
        # # . # #
        . # # # #
        . . # # .
        . # # . .
        # # . . .
        `)
    basic.showLeds(`
        # # . # #
        . # # # #
        . . # # .
        . # # . .
        . . # # #
        `)
    basic.showLeds(`
        # # . # #
        . # # # #
        . . # # .
        # . . # #
        . . # # #
        `)
    basic.showLeds(`
        # # . # #
        . # # # #
        # # . . #
        # . . # #
        . . # # #
        `)
    basic.showLeds(`
        # # . # #
        # . . . .
        # # . . #
        # . . # #
        . . # # #
        `)
    basic.showLeds(`
        . . # . .
        # . . . .
        # # . . #
        # . . # #
        . . # # #
        `)
}
basic.forever(function () {
	
})

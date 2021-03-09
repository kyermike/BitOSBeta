input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
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
radio.onReceivedString(function (receivedString) {
    basic.showString("New Text")
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
    radio.sendString("New text")
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
music.playMelody("F B C D G C5 E B ", 120)
radio.setGroup(123)
basic.forever(function () {
	
})

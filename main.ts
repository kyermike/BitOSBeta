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
    basic.showString("(!)")
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
    radio.sendString("(!)")
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
music.playMelody("C5 B D F B E G A ", 120)
radio.setGroup(123)
basic.forever(function () {
	
})

radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "moving") {
        basic.showIcon(IconNames.StickFigure)
        music.playMelody("- - - - - E D C ", 397)
    } else if (receivedString == "still") {
        basic.clearScreen()
    }
})
radio.setGroup(73)

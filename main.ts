radio.onReceivedStringDeprecated(function (receivedString) {
    if (receivedString == "moving") {
        basic.showIcon(IconNames.StickFigure)
        music.playTone(988, music.beat(BeatFraction.Half))
    } else if (receivedString == "still") {
        basic.clearScreen()
    }
})
radio.setGroup(73)

let A_button = 0
let lightlevel = 0
let B_button = 0
input.onButtonPressed(Button.A, function () {
    if (A_button) {
        A_button = 0
    } else {
        A_button = 1
    }
})
function alarm () {
    while (lightlevel > 100 && A_button == 0) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 200)
        music.rest(music.beat(BeatFraction.Breve))
    }
    if (A_button == 1) {
        while (B_button == 1) {
            basic.showNumber(lightlevel)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (B_button) {
        B_button = 0
    } else {
        B_button = 1
    }
})
basic.forever(function () {
    lightlevel = input.lightLevel()
    alarm()
})

input.onButtonPressed(Button.A, function () {
    if (target <= 50) {
        target = 100
    }
    basic.showNumber(target)
})
input.onButtonPressed(Button.B, function () {
    if (target <= 100) {
        target = 50
    }
    basic.showNumber(target)
})
let distance = 0
let target = 0
radio.setGroup(10)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance <= 50) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
    radio.sendNumber(distance)
})

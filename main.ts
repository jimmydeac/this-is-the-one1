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
target = 50
let is_detected = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance <= target) {
        basic.showIcon(IconNames.No)
        is_detected = 0
    } else {
        basic.showIcon(IconNames.Yes)
        is_detected = 1
    }
    radio.sendNumber(is_detected)
})

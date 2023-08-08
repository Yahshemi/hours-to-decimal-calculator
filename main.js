
// Calculate Decimal
function timeToDecimal(hours, minutes, seconds) {
    minutes = minutes/60;
    seconds =  seconds/3600;
    return hours + minutes + seconds;
}
// Handle Click Event
function handleClickEvent() {
    let hours = parseFloat($('#hours').val());
    let minutes = parseFloat($('#minutes').val());
    let seconds = parseFloat($('#seconds').val());
    // Result
    let result = timeToDecimal(hours, minutes, seconds);
    $('#output').text(
        "You\'ve worked " + result.toFixed(4) )
};

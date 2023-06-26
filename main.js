// Calculate Decimal
function timeToDecimal(){
hours + minutes * (1/60) + seconds * (1/ 3600)
}

// Handle Click Event
function handleClickEvent(){
    let hours = $('#hours').val();
    let minutes = $('#minutes').val();
    let seconds = $('#seconds').val();

// Result
let result = timeToDecimal(hours, minutes, seconds);
    console.log('you clicked me');
    console.log(hours, minutes, seconds);
    console.log(result);

};
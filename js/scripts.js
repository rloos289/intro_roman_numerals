//<!-- Back End -->
var symbols = [];
var newNumber = '';

function moreThanZero() {
  if (newNumber > 0) {
    translate(newNumber);
  }
}

function translate (number) {
  newNumber = number;
  if (newNumber >= 1000) {
    newNumber -= 1000;
    symbols.push('M');
    console.log(newNumber);
    moreThanZero()
    return newNumber;
  } else if (newNumber >= 500) {
    newNumber -= 500;
    symbols.push('D');
    console.log(newNumber);
    moreThanZero()
    return newNumber;
  } else if (newNumber >= 100) {
    newNumber -= 100;
    symbols.push('C');
    console.log(newNumber);
    moreThanZero()
    return newNumber;
}
}

//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var userInput = $('#userNumber').val();
    romanNum(userInput);
  });
});

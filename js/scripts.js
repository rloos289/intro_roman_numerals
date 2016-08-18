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
    moreThanZero()
    return newNumber;
  } else if (newNumber >= 500) {
    newNumber -= 500;
    symbols.push('D');
    moreThanZero()
    return newNumber;
  } else if (newNumber >= 100) {
    newNumber -= 100;
    symbols.push('C');
    moreThanZero()
    return newNumber;
  } else if (newNumber >= 50) {
    newNumber -= 50;
    symbols.push('L');
    moreThanZero()
    return newNumber;
  } else if (newNumber >= 10) {
    newNumber -= 10;
    symbols.push('X');
    moreThanZero()
    return newNumber;
  } else if (newNumber >= 5) {
    newNumber -= 5;
    symbols.push('V');
    moreThanZero()
    return newNumber;
  } else if (newNumber >= 1) {
    newNumber -= 1;
    symbols.push('I');
    moreThanZero()
    return newNumber;
  }

}

function exceptions() {
  var string = symbols.join('');
  var dcSearch = /DCCCC/;
  var cSearch = /CCCC/;
  var lxSearch = /LXXXX/;
  var xSearch = /XXXX/;
  var viSearch =/VIIII/;
  var iSearch = /IIII/;
  if (dcSearch.test(string)) {
    string = string.replace('DCCCC','CM');
  } if (cSearch.test(string)) {
    string = string.replace('CCCC','CD');
  } if (lxSearch.test(string)) {
    string = string.replace('LXXXX','XC');
  } if (xSearch.test(string)) {
    string = string.replace('XXXX','XL');
  } if (viSearch.test(string)) {
    string = string.replace('VIIII','IX');
  } if (iSearch.test(string)) {
    string = string.replace('IIII','IV');
  } return string;
}

//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var userInput = $('#userNumber').val();
    romanNum(userInput);
    // dont let user put in more than 3999
  });
});

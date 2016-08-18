//<!-- Back End -->

//<!-- Front End  -->
$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    var userInput = $('#userNumber').val();
    console.log(userInput);
  });
});

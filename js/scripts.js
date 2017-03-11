// Business logic
var pingPong = function(userNumber) {
  var outcome = [];

  for (var i = 1; i <= userNumber; i ++) {
    if (i % 15 === 0) {
      outcome.push("ping-pong");
    } else if (i % 5 === 0) {
      outcome.push("pong");
    } else if (i % 3 === 0) {
      outcome.push("ping");
    } else {
      outcome.push(i);
    }
  }
  return outcome;
};


// User interface logic. Gets the user input and runs that number through pingPongLoop, displaying each item in the resulting array as a list item.
$(function(){
  $(document).ready(function() {
    $("button#go").click(function(event) {
      $("#result" ).empty();
      var userNumber = parseInt($("input#number").val());
      var results = pingPong(userNumber);

      $("#result").append("<ul>");
          results.forEach(function(singleResult){
      $("#result").append("<li>" + singleResult + "</li>");
    });
      $("#result").append("</ul>");

      event.preventDefault();
    });
  });
});

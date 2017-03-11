// Business logic. 











// User interface logic. Gets the user input and runs that number through pingPongLoop, displaying each item in the resulting array as a list item.
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    $(".list-result").remove();
    var number = parseInt($("input#number").val());
    pingPongLoop(number).forEach(function(result) {
      $("ul#result-list").append("<li class='list-result'>" + result + "</li>");
    });
    event.preventDefault();
  });
});

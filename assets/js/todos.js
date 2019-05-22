// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add it to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

$("#toggle-form").on("click", "i", function() {
  if ($("i").hasClass("fa-sort-up")) {
    $("i").removeClass("fa-sort-up").addClass("fa-sort-down");
    $("input[type='text']").hide();
    $("li").hide();
  } else {
    $("i").removeClass("fa-sort-down").addClass("fa-sort-up");
    $("input[type='text']").show();
    $("li").show();
  }
});

$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var newTask = {taskName: inputtedTask}

    $("ul#undone-tasks").append("<li><span class='undoneTask'>" + newTask.taskName + "</span></li>");

    $(".task").last().click(function() {
      $("#show-undone-task").show();
      $("#show-undone-task h2").text(newTask.taskName);
      $(".task-name").text(newTask.taskName);
    });
  });
});

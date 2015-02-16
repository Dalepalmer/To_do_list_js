$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var newTask = {taskName: inputtedTask, doneTask: false};

    $("ul#undone-tasks").append("<li><span class='undoneTask'>" + newTask.taskName + "</span></li>");

    $(".undoneTask").last().click(function() {
      $("#show-undone-task").show();
      // $("#show-undone-task h2").text(newTask.taskName);
      $(".task-name").text(newTask.taskName);
        newTask = {taskName: inputtedTask, doneTask: true};

      if (newTask.doneTask === true) {
        $("ul#done-tasks").append("<ul><span class='doneTask'>" + newTask.taskName + "</ul></span>");
      }

      $(".doneTask").last().click(function() {
        $(".task-name").remove();
        $(".doneTask").remove();

      });
    });
  });
});

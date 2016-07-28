function tasksController(){
  var description = $("input#task_description").val()
  var priority = $("input#task_priority").val()
  var list_id = $("select#select_list").val()
  var newTask = new Task(description,priority,list_id)
  $(`ul#${newTask.list_id}`).append(`<li data-id="${newTask.id}"><button class="destroy-task">x</button> ${newTask.description},${newTask.priority}</li>`)


}

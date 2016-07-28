// Initialize

var store = {
  lists: [],
  tasks: []
}

 $(document).on('ready', function() {
  $('form#add_list').on('submit', function(event) {
    event.preventDefault()
    listsController.create()
    $('button.destroy-list').on('click', function(event) {
      listsController.destroy()
     })
  })
 })

$(document).on('ready', function() {
  $('form#add_task').on('submit', function(event) {
    event.preventDefault()
    tasksController()
  })
 })


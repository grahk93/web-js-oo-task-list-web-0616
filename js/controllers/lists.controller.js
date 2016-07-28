var  listsController = (function(){
  function create(){
    var title = $("input#list_title").val()
    var newList = new List(title)
    $('select').append( `<option value="${newList.id}"> ${newList.title} </option>` )
    $('#lists').append(`<div id="div-${newList.id}" class='list'><h2><button value="${newList.id}" class="destroy-list">x</button> ${newList.title}</h2></div>`)
    $("div.list").append(`<ul id="${newList.id}" data-id="${newList.id}"></ul>`)
  }
  function destroy(){
    debugger
    var itemId = parseInt(event.target.value)
    $(`#div-${itemId}`).remove()
    delete store.lists[itemId - 1]
    
  } 

  return {
    create,
    destroy
  }
}())


//turn this controller into a variable that points to a function that holds many functions so that we can
//opperate and access those funtions individually (very helpful for event listeners)




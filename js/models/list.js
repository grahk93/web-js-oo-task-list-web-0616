const List = (function() {
  var counter = 1
  return class List{
    constructor(title) {
      this.id = counter++
      this.title = title
      store.lists.push(this)
    }
  }
}())

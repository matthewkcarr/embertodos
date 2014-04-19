// for more details see: http://emberjs.com/guides/controllers/

/*
Embertodos.todosController = Ember.Controller.create({
	//needs: 'todos',
	content: Embertodos.store.all(Embertodos.Todo)

}); //.property('content.@each');
*/
/*
Embertodos.TodosController = Ember.Controller.extend({
	//needs: 'todos',
	content: Embertodos.store.all(Embertodos.Todo)

}); //.property('content.@each');
*/
Embertodos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = Embertodos.store.createRecord(Embertodos.Todo, {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  }
});

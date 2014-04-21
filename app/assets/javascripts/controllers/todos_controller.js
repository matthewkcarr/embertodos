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
			var todo = this.store.createRecord(Embertodos.Todo, {
        title: title,
        isCompleted: false
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    },

		clearCompleted: function() {
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
  },

	allAreDone: function(key, value) {
		if( value == undefined ) {
			return !!this.get('length') && this.everyProperty('isCompleted', true);
		} else {
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
		}
	}.property('@each.isCompleted'),

	hasCompleted: function() {
		return this.get('completed') > 0;
	}.property('completed'),

	completed: function() {
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),

	remaining: function() {
		return this.filterBy('isCompleted', false).get('length');
	}.property('@each.isCompleted'),

	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining')
});

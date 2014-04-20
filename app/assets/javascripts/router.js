// For more information see: http://emberjs.com/guides/routing/

Embertodos.Router.map(function() {
  this.resource('todos', { path: '/'}, function() {
		this.route('active');
		this.route('completed');
	});
});

Embertodos.TodosRoute = Ember.Route.extend({
	/*setupController: function(controller, model) {
		controller.set('todos', model);
	},*/
  /*collection: function() {
    return this.store.all( Embertodos.Todo );
  },
	controllerName: 'todos',
	*/

	/*setupController: function(controller, model) {
		//console.log('called');
		//Embertodos.store.all(Embertodos.Todo).forEach(function(item) {
	//		console.log(item);
	//	});
		controller.set('model', Embertodos.store.all(Embertodos.Todo) );
		//controller.set('content', Embertodos.store.all(Embertodos.Todo) );
		//console.log(controller.content);
	},*/ 
	
  /*todos: function() {
    return this.store.all( Embertodos.Todo );
  },*/ 
	/* why do we need this ? */
  /*model: function() {
    return this.store.all(Embertodos.Todo);
  } */
  model: function () {
    return this.store.find('todo');
  }
});

Embertodos.TodosIndexRoute = Ember.Route.extend({
  model: function () {
    return this.modelFor('todos');
  }
});

Embertodos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

Embertodos.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

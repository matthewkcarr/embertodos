// for more details see: http://emberjs.com/guides/views/

/*
Embertodos.EditTodoView = Ember.View.extend({
  templateName: 'edit_todo'
});
*/
Embertodos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-todo', Embertodos.EditTodoView);
Ember.Handlebars.helper('debug', function(the_string){
    console.log(the_string);
});

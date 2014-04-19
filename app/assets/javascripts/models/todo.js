// for more details see: http://emberjs.com/guides/models/defining-models/

Embertodos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});
Embertodos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];
//Embertodos.Store.createRecord( Embertodos.Todo, Embertodos.Todo.FIXTURES);
//Embertodos.Store.loadMany(Embertodos.Todo, [1,2,3], Embertodos.Todo.FIXTURES);
//Embertodos.ApplicationAdapter.createRecord( Embertodos.Store, Embertodos.Todo, Embertodos.Todo.FIXTURES[0]);
Embertodos.store.loadMany( Embertodos.Todo, Embertodos.Todo.FIXTURES);

Embertodos.Todo.FIXTURES.forEach(function( fixture ) {
	console.log(fixture);
}); 

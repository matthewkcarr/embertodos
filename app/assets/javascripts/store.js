// http://emberjs.com/guides/models/using-the-store/

/** use this to use the fixture Adapter **/
/* (be sure to uncomment the fixture usage in models/todo.js
Embertodos.ApplicationAdapter = DS.FixtureAdapter.create({simulateRemoteResponse: false});
Embertodos.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  //adapter: '_ams'
	adapter: Embertodos.ApplicationAdapter
});
*/

Embertodos.ApplicationAdapter = DS.ActiveModelAdapter;
Embertodos.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  //adapter: '_ams'
	adapter: Embertodos.ApplicationAdapter
});
//Embertodos.ApplicationAdapter = DS.FixtureAdapter.extend();
/*Embertodos.Store = DS.Store.extend( function() {
  adapter: DS.FixtureAdapter.create({simulateRemoteResponse: false})
});
Embertodos.store = Embertodos.Store.create();
*/
//Embertodos.store = Embertodos.Store.create();

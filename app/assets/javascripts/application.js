//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require embertodos

// for more details see: http://emberjs.com/guides/application/
Embertodos = Ember.Application.create();
//Embertodos.ApplicationAdapter = DS.FixtureAdapter.extend();
Embertodos.ApplicationAdapter = DS.FixtureAdapter.create({simulateRemoteResponse: false});
/*Embertodos.Store = DS.Store.extend( function() {
  adapter: DS.FixtureAdapter.create({simulateRemoteResponse: false})
});
Embertodos.store = Embertodos.Store.create();
*/
Embertodos.Store = DS.Store.extend({
	/*adapter: DS.FixtureAdapter.create({simulateRemoteResponse: false}), */
	adapter: Embertodos.ApplicationAdapter,
  revision: 13
});
Embertodos.store = Embertodos.Store.create();

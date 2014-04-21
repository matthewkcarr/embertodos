# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Todo.create(:title => 'Learn Ember.js', :is_completed => 'true')
Todo.create(:title => '...', :is_completed => 'false')
Todo.create(:title => 'profit', :is_completed => 'false')

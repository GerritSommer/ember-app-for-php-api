import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberappENV.locationType
});

Router.map(function() {
  this.resource('users');
  this.route('users.new', { path: 'users/new' });
  this.resource('user', { path: 'users/:user_id' },
    function() { this.route('edit'); });
});

export default Router;




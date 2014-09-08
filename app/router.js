import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberappENV.locationType
});

Router.map(function() {
  this.resource('users', function() {
     this.route('new');
     this.resource('user', { path: '/:user_id' }, function() {
        this.route('details');
        this.route('edit');
     });
   });
});

export default Router;
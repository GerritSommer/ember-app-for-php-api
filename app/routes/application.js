// routes/users.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.A([ Em.Object.create({name: 'aaaaa' }), Em.Object.create({name: 'bbbbb'}), Em.Object.create({name: 'ccccc'}), Em.Object.create({name: 'ddddd'}) ]);
  }

});
// routes/users.js
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  },
  actions: {
    deleteUser: function(user) {
      user.deleteRecord();
      user.save();
    }
  }
});
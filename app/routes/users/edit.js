import Ember from "ember";

export default Ember.Route.extend({
  templateName: 'user',
  model: function() {
    return this.store.createRecord('user');
  },
  actions: {
    willTransition: function() {
      var model = this.get('currentModel');
      if(model.get('isDirty')) {
        model.rollback();
      }
    },
    saveUser: function(user) {
      user.save();
    }
  }
});
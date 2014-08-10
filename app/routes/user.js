import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('user',  { into: 'application' });
  },

  model: function(params) {
    return this.store.find('user', params.user_id);
  }
});

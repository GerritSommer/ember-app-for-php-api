// Given... app/components/my-text-field.js
import Ember from "ember";

export default Ember.Component.extend({
    condition: null,

    // didInsertElement: function() {
    //   if(this.get('conditon'))
    // }
    updateVisibility: function() {
      if(this.get('condition')) {
        this.$().slideDown('fast');
      } else {
        this.$().slideUp('fast');
      }
    }.on('didInsertElement').observes('condition'),
});
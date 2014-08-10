import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  role: DS.attr('string')
});
export default User;

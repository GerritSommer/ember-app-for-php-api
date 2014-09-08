import Ember from 'ember';

export default Ember.Component.extend({
  active: false,
  selected: [],
  keyword: '',
  searchVisible: Ember.computed.gt('unselectedContent.length', 1),
  unselectedContent: Ember.computed.setDiff('content', 'selected'),
  filteredContent: Ember.computed('unselectedContent.@each', 'keyword', function() {
    var result = this.get('unselectedContent');
    var keyword = this.get('keyword').toLowerCase();
    if (!Ember.isEmpty(this.get('keyword'))) {
      result = result.filter(function(item) {
        return item.get('name').toLowerCase().indexOf(keyword) !== -1;
      });
    }
    return result.sortBy('name');
  }),

  actions: {
    toggleActive: function() {
      if (!this.get('active') && this.get('unselectedContent.length') === 0) {
        return;
      } else {
        this.toggleProperty('active');
      }
    },
    addToSelected: function(selectedItem) {
      this.get('selected').addObject(selectedItem);
      this.get('target').addObject(selectedItem);
      this.send('toggleActive');
    },
    removeFromSelected: function(selectedItem) {
      this.get('selected').removeObject(selectedItem);
      this.get('target').removeObject(selectedItem);
    }
  }
});

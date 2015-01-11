import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: function() {
    return this.get("title") + " (Live updating)";
  }.property("title"),

  title: ""
});

Meteor.publish('trashs', function() {
  this.unblock();
  return Trashs.find();
});
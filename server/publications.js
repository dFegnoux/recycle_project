Meteor.publish('trashs', function() {
  this.unblock();
  return [Trashs.find(), Types.find(), Materials.find(), Garbages.find()];
});
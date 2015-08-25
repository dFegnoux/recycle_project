Meteor.publish('teamsList', function() {
  return Teams.find();
});

Meteor.publish('playersList', function() {
  return Players.find();
});
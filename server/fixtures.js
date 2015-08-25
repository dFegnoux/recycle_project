Meteor.startup(function () {
  var teams = ['Spurs', 'Lakers', 'Raptors'];
  var players = [
    {firstName: 'Tony', lastName: 'Parker'},
    {firstName: 'Michael', lastName: 'Jordan'},
    {firstName: 'Boris', lastName: 'Diaw'}
  ];
  _.each(teams, function(team) {
    teamExists = Teams.findOne({ name: team});
    if(!teamExists)
      Teams.insert({ name: team });
  });

  _.each(players, function(player) {
    teamExists = Teams.findOne(player);
    if(!teamExists)
      Players.insert(player);
  });
});
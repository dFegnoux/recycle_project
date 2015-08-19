Template.home.created = function() {
  Session.set('search', "");
  Meteor.subscribe('trashs')
}

Template.home.rendered = function() {
  
}

Template.home.helpers({
  searchedTrashs: function() {
    var search = Session.get('search');
    console.log('searching : ', search);
    if (search)
      return Trashs.find({
        title : { 
          $regex: ".?("+search+").?",
          $options: "i"
        }
      });
  }
})

Template.home.events({
  "submit .search-form": function(e, template) {
    e.preventDefault();
  },
  "keyup .search": function(e, template) {
    e.preventDefault();
    Session.set('search', e.target.value);
  }
});
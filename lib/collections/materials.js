Materials = new Mongo.Collection("materials");

var Schemas = {};

Schemas.Material = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  slug: {
    type: String,
    label: 'Slug',
    max: 200,
    autoValue: function() {
      if (this.isInsert) {
        return getSlug(this.field('title').value);
      }
    },
    optional: true
  },
  garbage: {
    type: String,
    label: "Poubelle",
    autoform: {
      options: function() {
        if (Meteor.isClient) {
          return _.map(Garbages.find({}).fetch(), function(garbage) {
            return { label: garbage.title, value: garbage._id };
          });
        }
      }
    }
  }
});

Materials.attachSchema(Schemas.Material);

Materials.helpers({
  garbage: function() {
    return Garbages.findOne(this.garbage);
  },
  garbageName: function() {
    var material = Materials.findOne(this._id);
    var garbage = Garbages.findOne(material.garbage);
    if (garbage)
      return garbage.title;
    return;
  }
})
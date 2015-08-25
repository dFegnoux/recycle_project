Trashs = new Mongo.Collection("trashs");

var Schemas = {};

Schemas.Trash = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  materials: {
    type: [String],
    minCount: 2,
    maxCount: 5,
    label: "De quels matériaux est composé votre déchets?",
    autoform: {
      type: "select-multiple",
      options: function() {
        if (Meteor.isClient) {
          return _.map(Materials.find({}).fetch(), function(material) {
            return { label: material.title, value: material._id };
          });
        }
      }
    }
  },
});

Trashs.attachSchema(Schemas.Trash);

Trashs.helpers({
  slug: function() {
    console.log(this.title);
    return getSlug(this.title);
  },
  materialsTags: function() {
    var trash = Trashs.findOne(this._id);
    return Materials.find({ _id: { $in: trash.materials } });
  },
  materialsList: function() {
    var trash = Trashs.findOne(this._id);
    var materials = Materials.find({ _id: { $in: trash.materials } });
    return _.pluck(materials.fetch(), "title").join(", ");
  },
  bestGarbage: function() {
    var trash = Trashs.findOne(this._id);
    var materials = Materials.find({ _id: { $in: trash.materials } }).fetch();
    var garbages = [];
    _.each(materials, function(material) {
      var garbage = Garbages.findOne(material.garbage);
      garbages.push(garbage);
    });
    var priority = Math.min.apply(null, garbages.map(function(e) {
        return e.priority;
    }));
    return Garbages.findOne({ priority: priority }).title;
  }
})
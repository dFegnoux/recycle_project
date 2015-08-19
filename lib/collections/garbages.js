Garbages = new Mongo.Collection("garbages");

var Schemas = {};

Schemas.Garbage = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  }
});

Garbages.attachSchema(Schemas.Garbage);
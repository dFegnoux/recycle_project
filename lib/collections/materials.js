Materials = new Mongo.Collection("materials");

var Schemas = {};

Schemas.Material = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  }
});

Materials.attachSchema(Schemas.Material);
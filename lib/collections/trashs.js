Trashs = new Mongo.Collection("trashs");

var Schemas = {};

Schemas.Trash = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  }
});

Trashs.attachSchema(Schemas.Trash);
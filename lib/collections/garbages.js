Garbages = new Mongo.Collection("garbages");

var Schemas = {};

Schemas.Garbage = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    autoform: {
      rows: 5
    }
  },
  priority: {
    label: "Priority: (lower has more priority)",
    type: Number,
    min: 1
  },
  createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  }
});

Garbages.attachSchema(Schemas.Garbage);
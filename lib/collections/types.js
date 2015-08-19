Types = new Mongo.Collection("types");

var Schemas = {};

Schemas.Type = new SimpleSchema({
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

Types.attachSchema(Schemas.Type);
Garbages = new Mongo.Collection("garbages");

var Schemas = {};

Schemas.Garbage = new SimpleSchema({
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
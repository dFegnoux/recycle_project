Template.materialPage.helpers({
  material: function() {
    return Materials.findOne({ slug: this.params.slug });
  }
});
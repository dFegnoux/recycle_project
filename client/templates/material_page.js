Template.materialPage.helpers({
  material: function() {
    var slug = Router.current().params.materialSlug;
    if(slug)
      return Materials.findOne({ slug: slug });
  }
});
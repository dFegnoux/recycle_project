Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn:function(){
    return [
     Meteor.subscribe('trashs')
    ]
  }
});

Router.waitOn = function() {
  return Meteor.subscribe('trashs');
}

Router.route('/', {
  name: 'home',
  template: "home"
});

Router.route('material/:materialSlug', {
  name: 'materialPage',
  template: "materialPage"
});
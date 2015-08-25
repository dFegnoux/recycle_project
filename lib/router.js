Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home',
  template: "home"
});

Router.route('/:materialSlug', {
  name: 'materialPage',
  template: "materialPage"
});
Router.route('/teams', {
  name: 'teamsList',
  template: 'teamsList'
});

Router.route('/team/:teamSlug', {
  name: 'teamPage',
  template: "teamPage"
});

Router.route('/players', {
  name: 'playersList',
  template: 'playersList'
});

Router.route('/player/:playerSlug', {
  name: 'playerPage',
  template: "playerPage"
});
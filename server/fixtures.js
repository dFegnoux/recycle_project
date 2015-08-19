if ( Meteor.users.find().count() === 0 ) {
  Accounts.createUser({
    username: 'admin',
    email: 'denis.fegnoux@gmail.com',
    password: 'admin-password',
    profile: {
      first_name: 'Denis',
      last_name: 'Fegnoux'
    }
  });
}
module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: 'Henok Ketsela\'s Home page',
         username: username
      });
  });

  // Set up additional routes here
  router.get('/hketsela/secondpage', function (req, res, next) {
    res.render(username + '/secondpage', {
      title: 'Second Page',
      username: username,
     });
  });
};
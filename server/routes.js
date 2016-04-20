var app = require('./server.js');
var Spot = require('./spot.js');
var User = require('./user.js');

app.get('/api/spots', function(req, res) {
  Spot.find({}, function(err, spots) {
    if (err) {
      return console.error('Error finding spots:', err);
    }
    
    console.log('Spots found:', spots);
    res.json(spots);
  });
});

app.post('/api/spots', function(req, res) {
  Spot.create({req.body}, function(err, spot) {
    if (err) {
      return console.error('Error creating spot:', err);
    }
    console.log('Spot created:', spots);
    res.json(spot);
  });
});

app.post('/api/users', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (!user) {
      User.create({req.body}, function(err, user) {
        if (err) {
          return console.error('Error creating user:', err);
        }
        res.json(user);
      })
    } else {
      return console.log('User already exists');
    }
  });
});




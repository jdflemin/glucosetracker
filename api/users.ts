import * as express from 'express';
import User from '../models/userinfo';

let router = express.Router();

router.post('/register', (req, res) => {
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.save()
    .then((savedUser) => res.json({token: savedUser._id}))
    .catch((err) => res.json(err));
});

router.post('/login', (req, res) => {
  User.findOne({username: req.body.username, password: req.body.password})
    .then((foundUser) => res.json({token: foundUser._id, user: foundUser}))
    .catch((err) => res.json(err));
});

router.get('/', (req, res) => {
  User.find().then((foundUser) => res.json(foundUser))
    .catch((err) => res.json(err));
});

router.post('/:id', (req, res) => {
  User.findOne({_id: req.params.id}).then((foundUser) => {
    foundUser.bloodsugars = req.body.bloodsugars;
    foundUser.save().then((savedUser) => res.json(savedUser))
    .catch((err) => res.json(err));
  })
});

router.post('/:id/bloodsugars/:bloodsugarid', (req, res) => {
  User.findOne({_id: req.params.id}).then((user) => {
    user.bloodsugars.forEach((bloodsugar) => {
      if(bloodsugar._id == req.params.bloodsugarid) {
        bloodsugar.date = req.body.date;
        bloodsugar.time = req.body.time;
        bloodsugar.sugar = req.body.sugar;
      }
    });
    user.save().then((savedUser) => res.json(savedUser));
  });
  // User.update({_id: req.params.id, 'bloodsugars._id': req.params.bloodsugarid},
  //   {'$set':{
  //     'bloodsugars.$.date': req.body.date,
  //     'bloodsugars.$.time': req.body.time,
  //     'bloodsugars.$.sugar': req.body.sugar
  //     }
  //   }).then((foundUser) => res.json(foundUser))
  });

router.get('/:id', (req, res) => {
  User.findOne({_id: req.params.id})
  .then((userGlucose) => res.json(userGlucose))  //service and controller
  .catch((err) => res.json(err));
});

// router.delete('/:id', (req, res) => {
//   User.remove({_id: req.params.id})
//     .then((glucoseDeleted) => res.json(glucoseDeleted))
//     .catch((err) => res.json(err))
// })

export default router;

const express = require('express');
const router = express.Router();
const DataModel = require('../thisWillBeReplacedByTheDataModel'); // Replace this with the dataModel name

// get a list of stored Data from the db
router.get('/databaseFiles', function (req, res, next) {
  ImageCardModel.find({}).then(function (imageCard) {
    res.send(imageCard);
  })
});

// get a list of specific user Data  from the db
router.get('/databaseFiles/:dataType', function (req, res, next) {
  ImageCardModel.find({ dataType: req.params.user }).then(function (imageCard) {
    res.send(imageCard);
  })
});

// add a new image to the db
router.post('/databaseFiles', function (req, res, next) {
  ImageCardModel.create(req.body).then(function (imageCard) {
    res.send(imageCard);
  }).catch(next);
});



/* UNCOMMENT IF YOU NEED OTHER METHODS */

// update a image to the db
/* router.put('/databaseFiles/:id', function (req, res, next) {
  ImageCardModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    ImageCardModel.findOne({ _id: req.params.id }).then(function (imageCard) {
      res.send(imageCard);
    });
  });
}); */

// delete a image from the db
/* router.delete('/databaseFiles/:id', function (req, res, next) {
  ImageCardModel.findByIdAndRemove({ _id: req.params.id }).then(function (imageCard) {
    res.send(imageCard);
  });
}); */

module.exports = router;
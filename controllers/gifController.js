const db = require("../models");

// Defining all the methods for the gifController
module.exports = {
  findAll: function(req, res) {
    db.Gif
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Gif
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(4220).json(err));
  },
  create: function(req, res) {
    db.Gif
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Gif
      .findByIdAndUpdate(req.params.id, req.body, {new: true})  //find by id, update with body, return new instead of old
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(4220).json(err));
  }
};
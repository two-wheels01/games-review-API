const express = require('express');
const { selectCategories } = require('../models/categories.models');
selectCategories;

exports.getCategories = (req, res, next) => {
  selectCategories()
    .then((categories) => {
      res.status(200).send({ categories });
    })
    .catch(next);
};
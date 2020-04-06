const Voorraad = require("../model/voorraad");
var _this = this;
exports.fetch = function (req, res, next) {
  Voorraad.find({
    bedrijf: req.user.bedrijf,
  })
    .sort({ objectnummer: 1 })
    .collation({ locale: "nl" })
    .exec(function (err, results) {
      if (err) {
        return next(err);
      }
      res.json({
        results,
      });
    });
};

exports.insert = function (req, res, next) {
  const { categorie, object, objectnummer, eigenschappen, status } = req.body;
  Voorraad.create(
    {
      categorie,
      object,
      objectnummer,
      eigenschappen,
      status,
      "bedrijf": req.user.bedrijf,
    },
    (err, results) => {
      if (err) {
        res.status(500).json({
          errors: {
            global: "Something went wrong",
            error: err,
          },
        });
      } else {
        res.json({
          results,
        });
      }
    }
  );
};

exports.get = function (req, res, next) {
  Voorraad.findOne({ _id: req.params.id }).exec(function (err, results) {
    if (err) {
      return next(err);
    }
    res.json({
      results,
    });
  });
};

exports.update = function (req, res, next) {
  const { categorie, object, objectnummer, eigenschappen, status  } = req.body;
  Voorraad.update(
    { _id: req.params.id },
    {
      categorie,
      object,
      objectnummer,
      eigenschappen,
      status,
    },
    (err, results) => {
      if (err) {
        res.status(500).json({
          errors: {
            global: "Something went wrong",
          },
        });
      } else {
        res.json({
          results,
        });
      }
    }
  );
};

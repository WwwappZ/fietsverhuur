const Categorie = require("../model/categorie");
var _this = this;
exports.fetch = function (req, res, next) {
  Categorie.find({
    bedrijf: req.user.bedrijf,
  })
    .sort({ naam: 1 })
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
  const { naam, beschrijving, leverancier } = req.body;
  Categorie.create(
    {
      naam,
      beschrijving,
      leverancier,
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
  Categorie.findOne({ _id: req.params.id }).exec(function (err, results) {
    if (err) {
      return next(err);
    }
    res.json({
      results,
    });
  });
};

exports.update = function (req, res, next) {
  const { naam, beschrijving, leverancier } = req.body;
  Categorie.update(
    { _id: req.params.id },
    {
      naam,
      beschrijving,
      leverancier
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

const Leverancier = require("../model/leverancier");
var _this = this;
exports.fetch = function (req, res, next) {
  Leverancier.find({
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
  const { naam, beschrijving } = req.body;
  Leverancier.create(
    {
      naam,
      beschrijving,
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
  Leverancier.findOne({ _id: req.params.id }).exec(function (err, results) {
    if (err) {
      return next(err);
    }
    res.json({
      results,
    });
  });
};

exports.update = function (req, res, next) {
  const { naam, beschrijving } = req.body;
  Leverancier.updateOne(
    { _id: req.params.id },
    {
      naam,
      beschrijving,
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

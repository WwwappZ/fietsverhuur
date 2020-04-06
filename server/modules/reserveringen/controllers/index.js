const Reserveringen = require("../model/reserveringen");
var _this = this;
exports.fetch = function (req, res, next) {
  Reserveringen.find({
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
  const { voorraad, gast, start, eind, actief } = req.body;
  Reserveringen.create(
    {
      voorraad,
      gast,
      start,
      eind,
      actief,
      bedrijf: req.user.bedrijf,
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
  Reserveringen.findOne({ _id: req.params.id }).exec(function (err, results) {
    if (err) {
      return next(err);
    }
    res.json({
      results,
    });
  });
};

exports.update = function (req, res, next) {
  const { voorraad, gast, start, eind, actief } = req.body;
  Reserveringen.update(
    { _id: req.params.id },
    {
      voorraad,
      gast,
      start,
      eind,
      actief,
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

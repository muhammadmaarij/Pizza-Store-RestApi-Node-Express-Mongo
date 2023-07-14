var express = require("express");
var router = express.Router();

var Pizza = require("./../models/pizzaa");

router.get("/", (req, res, next) => {
  Pizza.findOne({})
    .exec()
    .then(
      (pizzass) => {
        res.json(pizzass);
      },
      (err) => next(err)
    );
});

router.post("/", (req, res, next) => {
  Pizza.create(req.body).then(
    (pizzass) => {
      res.json(pizzass);
    },
    (err) => next(err)
  );
});

router.get("/:id", (req, res, next) => {
  Pizza.findById(req.params.id).then(
    (pizzass) => {
      res.json(pizzass);
    },
    (err) => {
      next(err);
    }
  );
});

router.put("/:id", (req, res, next) => {
  Pizza.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, price: req.body.price },
    { new: true }
  ).then(
    (pizzass) => {
      res.json(pizzass);
    },
    (err) => next(err)
  );
});

router.delete("/:id", (req, res, next) => {
  Pizza.findByIdAndRemove(req.params.id).then(
    (pizzass) => {
      res.json(pizzass);
    },
    (err) => next(err)
  );
});

module.exports = router;

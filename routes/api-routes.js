var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

  app.get("/api/getitems", function(req, res) {
    console.log(req.query.lost)
    db.stuff.findAll({
      where: {
        lost: req.query.lost
      }
    }).then(function(dbStuff) {
      res.json(dbStuff);
    });
  });


  app.post("/api/postitem", function(req, res) {
    console.log(req)
    db.stuff.create({


      itemtype: req.body.itemtype,
      color: req.body.color,
      size: req.body.size,
      attrib: req.body.attribute,
      lost: req.body.isLost,
      location: req.body.location

    }).then(function(dbStuff) {
      res.json(dbStuff);
    });
  });



  app.delete("/api/stuff/:id", function(req, res) {
    db.stuff.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStuff) {
      res.json(dbStuff);
    });
  });

};

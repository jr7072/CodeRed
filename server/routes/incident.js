const express = require("express");

// incidentRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /incident.
const incidentRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the incidents.
incidentRoutes.route("/incident").get(function (req, res) {
  let db_connect = dbo.getDb("Safety");
  db_connect
    .collection("Incidents")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single incident by id
incidentRoutes.route("/incident/:id").get(function (request, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( request.params.id )};
  db_connect
      .collection("Incidents")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new incident.
incidentRoutes.route("/incident/add").post(function (request, response) {
  let db_connect = dbo.getDb();
<<<<<<< HEAD
  let myobj = {
    person_name: request.body.person_name,
    person_position: request.body.person_position,
    person_level: request.body.person_level,
=======
  console.log(request)
  let myobj = {
      IncidentName: request.body.IncidentName,
      Date: request.body.Date,
      Time: request.body.Time,
      DateTime: 420,
      Employee: request.body.Employee,
      Workplace: request.body.Workplace,
      IncidentType: request.body.IncidentType,
      LocationX: request.body.LocationX,
      LocationY: request.body.LocationY
>>>>>>> 62046f911eac6e038abff2069fb77a123e2d5f6f
  };
  db_connect.collection("Incidents").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a incident by id.
incidentRoutes.route("/incident/:id").post(function (request, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( request.params.id )};
  let newvalues = {
    $set: {
      person_name: request.body.person_name,
      person_position: request.body.person_position,
      person_level: request.body.person_level,
    },
  };
  db_connect
    .collection("Incidents")
    .updateOne(myquery, newvalues, function (error, res) {
      if (err) throw error;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a incident
incidentRoutes.route("/:id").delete((request, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( request.params.id )};
  db_connect.collection("Incidents").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});

module.exports = incidentRoutes;
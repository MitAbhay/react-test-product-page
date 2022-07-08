const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb("react-test");
 console.log(db_connect)
 db_connect
   .collection("products")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
 
module.exports = recordRoutes;
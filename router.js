var express = require('express');
var memberctlr = require('./memberctlr');

var routes = express.Router();

routes.post('/addmember', function(req, res) {
	memberctlr.addMember(req.body,res);
});

routes.get("/getmember/:id", function(req, res) {
	memberctlr.getMember(req.params.id, res);
});

routes.delete("/deletemember/:id", function(req, res) {
	memberctlr.deleteMember(req.params.id, res);
});
routes.post("/updatemember", function(req, res) {
	memberctlr.updateMember(req.body,res);
});


module.exports =  routes
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

	// GET route for getting all of the todos
	app.get("/api/todos", function (req, res) {
		db.ToDo.findAll({}).then(function (dbTodo) {
			res.json(dbTodo);
		});
	});

	// POST route for saving a new todo. We can create a todo using the data on req.body
	app.post("/api/todos", function (req, res) {
		db.ToDo.create({
			text: req.body.text,
		}).then(function(dbTodo) {
			res.json(dbTodo);
		});
	});

	// DELETE route for deleting todos. We can access the ID of the todo to delete in
	// req.params.id
	app.delete("/api/todos/:id", function (req, res) {
		db.ToDo.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbTodo) {
			res.json(dbTodo);
		});
	});

	// PUT route for updating todos. We can access the updated todo in req.body
	app.put("/api/todos", function (req, res) {
		db.ToDo.update({
			text: req.body.text,
			complete: req.body.complete
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbTodo) {
			res.json(dbTodo);
		});
	});
};
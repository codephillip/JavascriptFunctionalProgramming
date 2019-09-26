const express = require('express');
// const db = require('./db/db')
const bodyParser = require('body-parser');

const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

let todos = [
    {
      id: 1,
      title: "lunch",
      description: "Go for lunch by 2pm"
    }
];

app.get('/', (req, res) => res.send('Hello World!'));


app.get('/api/v1/todos', (req, res) => {
	res.status(200).send({
		success: 'true',
		message: 'todos retrieved successfully',
		todos: todos
	})
});


app.post('/api/v1/todos', (req, res) => {
	const todo = {
		id: todos.length + 1,
		title: req.body.title,
		description: req.body.description
	};

	todos.push(todo);

	res.status(201).send({
		success: 'true',
		message: 'created todo item',
		todo: todo
	});
}); 


// get single todo
// app.get('/api/v1/todos/:id', (req, res) => {
// 	const id = parseInt(req.params.id, 10);
// 	console.log("data id: " + id);

// 	todos.map((todo) => {
// 		if (todo.id == id) {
// 			return res.status(200).send({
// 				success: 'true',
// 				message: 'created todo item',
// 				todo: todo
// 			});
// 		}
// 	})
// });

// get single todo with high level function
app.get('/api/v1/todos/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);
	console.log("data id: " + id);

	todos.map((todo) => 
		(todo, id) => todo.id == id 
		? res.status(200).send({
			success: 'true',
			message: 'created todo item',
			todo: todo})
		: res.status(400).send({
			success: 'true',
			message: 'created todo item',
			todo: todo}))
});

// const matches = (todo, id) => todo.id == id? true: false;



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
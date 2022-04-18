const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// mongodb+srv://awftodo:<password>@todoappdatabase.qxdpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb://127.0.0.1:27017/react-todo 
mongoose.connect('mongodb+srv://awftodo:awf2022@todoappdatabase.qxdpj.mongodb.net/ToDoAppDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(() => console.log("Connected to MongoDB")).catch(console.error);

// Models
const Todo = require('./models/Todo');
const History = require('./models/History');

app.get('/todos', async (req, res) => {
	const todos = await Todo.find();

	res.json(todos);
});

app.get('/completed-todos', async (req, res) => {
	const todos = await Todo.find();
	var temp = [];
	
	for (var i = 0; i < todos.length; i+=1) {
		if (todos[i].complete) {
			temp.push(todos[i]);
		}
	}

	res.json(temp);
});

app.get('/incomplete-todos', async (req, res) => {
	const todos = await Todo.find();
	var temp = [];
	
	for (var i = 0; i < todos.length; i+=1) {
		if (!todos[i].complete) {
			temp.push(todos[i]);
		}
	}

	res.json(temp);
});

app.post('/todo/new', (req, res) => {
	if (req.body.text !== "") {
		const todo = new Todo({
			text: req.body.text
		})

		todo.save();

		res.json(todo);
	}
});

app.delete('/todo/delete/:id', async (req, res) => {
	const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});
});

app.get('/todo/complete/:id', async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	todo.complete = !todo.complete;

	todo.save();

	res.json(todo);
})

app.post('/todo/update/:id', async (req, res) => {
	if (req.body.text !== "") {
		const todo = await Todo.findById(req.params.id);

		todo.text = req.body.text;

		todo.save();

		res.json(todo);
	}
});

app.get('/history', async (req, res) => {
	const history = await History.find();

	res.json(history);
});

app.post('/history/insert', (req, res) => {
	const history = new History({
		text: req.body.text
	})

	history.save();

	res.json(history);
});

app.listen(PORT);
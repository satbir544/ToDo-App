import { useEffect, useState } from 'react';
import {FaTrash} from 'react-icons/fa';
import {AiFillEdit} from 'react-icons/ai';

//const api_base = 'http://localhost:3001';
const api_base = 'https://awftodoappserver.azurewebsites.net';

function Home() {
	const [todos, setTodos] = useState([]);
	const [popupActive, setPopupActive] = useState(false);
	const [editPopupActive, setEditPopupActive] = useState(false);
	const [newTodo, setNewTodo] = useState("");
	const [updatedTodo, setUpdatedTodo] = useState("");
	const [id, setId] = useState("");

	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/todos')
			.then(res => res.json())
			.then(data => setTodos(data))
			.catch((err) => console.error("Error: ", err));
	}

	const openDialog = (id) => {
		setEditPopupActive(true);
		setId(id)
	}

	const completeTodo = async id => {
		const data = await fetch(api_base + '/todo/complete/' + id).then(res => res.json());

		setTodos(todos => todos.map(todo => {
			if (todo._id === data._id) {
				todo.complete = data.complete;
			}

			return todo;
		}));
	}

	const addTodo = async () => {
		const data = await fetch(api_base + "/todo/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				text: newTodo
			})
		}).then(res => res.json());

		setTodos([...todos, data]);

		setPopupActive(false);
		setNewTodo("");
	}

	const deleteTodo = async id => {
		const data = await fetch(api_base + '/todo/delete/' + id, { method: "DELETE" }).then(res => res.json());

		setTodos(todos => todos.filter(todo => todo._id !== data.result._id));
	}

	const updateTodo = async id => {
		const data = await fetch(api_base + '/todo/update/' + id, { 
			method: 'POST',
        	headers: { 'Content-Type': 'application/json' },
        	body: JSON.stringify({ text: updatedTodo })
		}).then(res => res.json());

		setTodos(todos => todos.map(todo => {
			if (todo._id === data._id) {
				todo.text = data.text;
			}

			return todo;
		}));

		setEditPopupActive(false);
	}

	return (
		<div className="Home">
			<h2>Your Tasks</h2>

			<div className="todos">
				{todos.length > 0 ? todos.map(todo => (
					<div>
						<div className={"todo" + (todo.complete ? " is-complete" : "")}
							key={todo._id} onClick={() => completeTodo(todo._id)}
						>
							<div className="checkbox"></div>

							<div className="text">{todo.text}</div>
						</div>
						<div className='options'>
							<div className="update-todo" onClick={() => openDialog(todo._id)}> <AiFillEdit size="1.4em"/> </div>

							<div className="delete-todo" onClick={() => deleteTodo(todo._id)}> <FaTrash/> </div>
						</div>
					</div>
				)) : (
					<p>You currently have no tasks. Click the + button to add a task.</p>
				)}
			</div>

			<div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

			{popupActive ? (
				<div className="popup">
					<div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
					<div className="content">
						<h3>Add Task</h3>
						<input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
						<div className="button" onClick={addTodo}>Create Task</div>
					</div>
				</div>
			) : ''}

			{editPopupActive ? (
				<div className="popup">
					<div className="closePopup" onClick={() => setEditPopupActive(false)}>X</div>
					<div className="content">
						<h3>Edit Task</h3>
						<input type="text" className="add-todo-input" onChange={e => setUpdatedTodo(e.target.value)} value={updatedTodo} />
						<div className="button" onClick={() => updateTodo(id)}>Update Task</div>
					</div>
				</div>
			) : ''}
		</div>
	);
}

export default Home;
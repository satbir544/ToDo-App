import { useEffect, useState } from 'react';
const api_base = 'http://localhost:3001';

function Incomplete() {
    const [todos, setTodos] = useState([]);

	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/incomplete-todos')
			.then(res => res.json())
			.then(data => setTodos(data))
			.catch((err) => console.error("Error: ", err));
	}

    return (
        <div className="Incomplete">
			<h2>Your Incompleted Tasks</h2>

			<div className="todos">
				{todos.length > 0 ? todos.map(todo => (
					<div className={"todo" + (todo.complete ? " is-complete" : "")}
					 	key={todo._id}
					>
						<div className="checkbox"></div>

						<div className="text">{todo.text}</div>
					</div>
				)) : (
					<p>No incomplete tasks found. You are all caught up!</p>
				)}
			</div>
        </div>
    );
}

export default Incomplete;
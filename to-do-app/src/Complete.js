import { useEffect, useState } from 'react';
const api_base = 'https://awftodoappserver.azurewebsites.net';

//const api_base = 'http://localhost:3001';

function Complete() {
    const [todos, setTodos] = useState([]);

	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api_base + '/completed-todos')
			.then(res => res.json())
			.then(data => setTodos(data))
			.catch((err) => console.error("Error: ", err));
	}

    return (
        <div className="Complete">
			<h2>Your Completed Tasks</h2>

			<div className="todos">
				{todos.length > 0 ? todos.map(todo => (
					<div className={"todo" + (todo.complete ? " is-complete" : "")}
					 	key={todo._id}
					>
						<div className="checkbox"></div>

						<div className="text">{todo.text}</div>
					</div>
				)) : (
					<p>You currently have no completed tasks.</p>
				)}
			</div>
        </div>
    );
}

export default Complete;
import { useEffect, useState } from 'react';

//const api_base = 'https://awftodoappserver.azurewebsites.net';

const api_base = 'http://localhost:3001';

function History() {
    const [history, setHistory] = useState([]);

	useEffect(() => {
		GetHistory();
	}, [history]);

	const GetHistory = () => {
		fetch(api_base + '/history')
			.then(res => res.json())
			.then(data => setHistory(data))
			.catch((err) => console.error("Error: ", err));
	}

	const deleteHistory = () => {
		fetch(api_base + '/history/delete', { method: "DELETE" }).then(res => res.json());
	}

    return (
        <div className="History">
			<h2>History</h2>

			<div className="history">
				{history.length > 0 ? history.map(h => (
                    <p> {h.text} {' -- '} {h.timestamp}</p>
				)) : (
					<p>No History Found.</p>
				)}
			</div>

			<div className="delHistory" onClick={() => deleteHistory()}>Delete History</div>

        </div>
    );
}

export default History;
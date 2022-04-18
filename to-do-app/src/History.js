import { useEffect, useState } from 'react';

//const api_base = 'https://awftodoappserver.azurewebsites.net';

const api_base = 'http://localhost:3001';

function History() {
    const [history, setHistory] = useState([]);

	useEffect(() => {
		GetHistory();
	}, []);

	const GetHistory = () => {
		fetch(api_base + '/history')
			.then(res => res.json())
			.then(data => setHistory(data))
			.catch((err) => console.error("Error: ", err));
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
        </div>
    );
}

export default History;
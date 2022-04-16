import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Complete from './Complete';
import Incomplete from './Incomplete';
import History from './History';
import About from './About';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav/>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/complete" component={Complete}/>
					<Route path="/incomplete" component={Incomplete}/>
					<Route path="/history" component={History}/>
					<Route path="/about" component={About}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

import React from 'react';
import {Grid, Row} from 'react-bootstrap';

import Population from './components/Population';
import CountryList from './components/CountryList';
import Ranking from './components/Ranking';

class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Grid>
				<h1>World Population Application</h1>
				<Row>
					<Population
						country="World"
					  title="World Population"
					/>
					<Population
						country="United States"
						title="USA Population"
					/>
				</Row>
				<CountryList />
				<Ranking />
			</Grid>
		)
	}
}

export default App;
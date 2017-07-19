import React from 'react';
import {Grid, Row} from 'react-bootstrap';

import Population from './components/Population';

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
			</Grid>
		)
	}
}

export default App;
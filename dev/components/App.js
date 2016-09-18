import React from 'react';
import PersonList from '../containers/containers.person';
const App = ()=>{
	return (
		<div>
			<div className="col-md-4">
				<h3>Person List</h3>
				<PersonList />
			</div>

			<div className="col-md-8">
				<h3>Active Person</h3>
			</div>
		</div>
	)
}

export default App;
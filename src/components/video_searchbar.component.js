import React,{Component} from 'react';

class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state = {term:""}
	}

	render(){
		return (
						<div>
							<input onChange={evt=> this.setState({term:evt.target.value})}/>
						</div>
					);
	}
	onInputChange(evt){
		console.log(evt.target.value);
	}
};

export default SearchBar;
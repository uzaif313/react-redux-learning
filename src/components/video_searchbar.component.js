import React,{Component} from 'react';

class SearchBar extends Component{

	constructor(props){
		super(props);
		
	}

	render(){
		return (
						<div className="search-bar">
							<input className="form-control" onChange={evt =>this.onInputChange(evt.target.value)}/>
						</div>
					);
	}

	onInputChange(term){
		console.log(term);
		// this.setState({term});
		this.props.onSearchTermChanged(term);
	}
};

export default SearchBar;
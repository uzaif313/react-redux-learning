import React from 'react';

class SearchBar extends React.Component {
    	
    constructor(props){
    	super(props);
    	this.state = {companySearch:''}
    	this.onInputChange = this.onInputChange.bind(this)
    }


    onInputChange(event){
    	this.setState({companySearch:event.target.value})
    	console.log(this.state.companySearch);
    }

    onFormSubmit(event){
    	event.preventDefault();
    	//fetch data from backend with mention companySearch
    	 
    }

    render() {	
        return (<div>
        					<form  onSubmit={this.onFormSubmit} className="input-group">
        						<input
        						placeholder="Enter Company Stock Market Code"
        						className="form-control"
        						onChange={this.onInputChange}/>
        						<span className="input-group-btn"><button className="btn btn-secondary">Search</button></span>
        					</form>
                </div>);
    }
}

export default SearchBar;

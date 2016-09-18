import React,{Component} from  'react'
import {bindActionCreators} from 'redux'
import {connect}  from "react-redux"



class PersonList extends Component {

    personListItem(){
        return this.props.persons.map((person)=>{
            console.log(person.name);
            return (<li key={person._id} className="list-group-item">{person.name}</li>)
        })
    }

    render() {
        return(<div>
                	<ul className="list-group">
                         {console.log(this.personListItem())}   
                        {this.personListItem()}
                	</ul>
               </div>
            );
    }
}


function mapStateToProps(state){
	return {
		persons :state.persons
	}
}
export default connect(mapStateToProps)(PersonList);

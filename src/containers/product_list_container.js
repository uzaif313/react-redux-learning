import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectProduct} from '../actions/index';
import {bindActionCreators} from 'redux';
class ProductListContainer extends Component {

	renderProductList(){
		return (
			this.props.products.map((product,i)=>{
					return <li
					 key={i}
					onClick={()=>this.props.selectProduct(product)}	
					 className="list-group-item">
					 	
					 {product.name}
					 </li>
				})
		)
	}

	render(){
			return(
				<div className="card">
					<ul className="list-group list-group-flush col-sm-3">
						{this.renderProductList()}
					</ul>
				</div>
			)
	}
}
function mapStateToProps(state){
	return {
		products:state.products
	}
}

function mapDispatchToProps(dispatch){
	//notify Action selectProduct to All Reducers with help of dispatch
	return bindActionCreators({selectProduct:selectProduct},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListContainer)


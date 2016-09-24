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
				<ul className="list-group col-sm-4">
					{this.renderProductList()}
				</ul>
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


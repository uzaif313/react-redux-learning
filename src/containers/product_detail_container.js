import React from 'react';
import {connect} from 'react-redux';

class ProductDetailContainer extends React.Component {
    render() {
    		if (this.props.product) {
	        return (<div className="card col-md-8">
	        	      	<h1 className="card-title">Detail of Product</h1>
	        	      	<div className="card-block">
			        	      	<h4>SKU:{this.props.product.sku}</h4>	
			        	      	<h5>Product Name:{this.props.product.name}</h5>
			        	      	<h6>Price:{this.props.product.price}</h6> 
		     	      	      <a href="#" className="btn btn-primary">Grab Now</a>
	     	      	      </div>
	        	      </div>);
    		}
    			return <div>Detail view of Product</div>
    		 
    }
}


function mapStateToProps(state){
	return {
		product:state.selectProduct
	}
}
export default connect(mapStateToProps)(ProductDetailContainer);
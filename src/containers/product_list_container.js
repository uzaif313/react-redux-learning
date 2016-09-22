import React,{Component} from 'react'


class ProductListContainer extends Component {

	renderProductList(){
		return (
			this.props.products.map((product,i)=>{
					return <li key={i} className="list-group-item">{product.name}</li>
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

export default ProductListContainer


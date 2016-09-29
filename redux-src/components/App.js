import React,{Component} from 'react';
import ProductList from '../containers/product_list_container'
import ProductDetail from '../containers/product_detail_container'
class App extends Component{

	render(){
			return (
				<div>
				
					<ProductList/>
					<ProductDetail/>
				</div>
			)
	}
}

export default App
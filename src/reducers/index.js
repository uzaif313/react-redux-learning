import {combineReducers} from 'redux';
import ProductReducers from './reducers.products';
import SelectProduct from './reducer_select_product';
const mainReducers = combineReducers({
	products:ProductReducers,
	selectProduct:SelectProduct
})

export default mainReducers
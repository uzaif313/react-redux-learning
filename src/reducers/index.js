import {combineReducers} from 'redux'
import ProductReducers from './reducers.products';

const mainReducers = combineReducers({
	products:ProductReducers
})

export default mainReducers
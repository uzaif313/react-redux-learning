import {combineReducers} from 'react-readux'
import {ProductReducers} from './reducers.products';

const mainReducers = combineReducers({
	products:ProductReducers
})

export default mainReducers
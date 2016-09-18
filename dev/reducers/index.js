import {combineReducers} from "redux";
import personsReducers from './reducers.person';

const allReducers =  combineReducers({
	persons : personsReducers
})
 export default allReducers

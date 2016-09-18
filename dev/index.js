import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './reducers'
import App from './components/App'

const store = createStore(allReducers);

const Main = ()=>{
	return (
			<div className="container">
				<Provider store={store}>	
					<App/>
				</Provider>
			</div>
		)
}

ReactDOM.render(<Main/>,document.querySelector(".container"));
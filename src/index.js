import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/App';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(<App/>,document.querySelector(".container"));
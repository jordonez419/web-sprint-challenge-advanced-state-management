import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import { store } from "./reducers";




import "./index.css";
import App from '../src/App'

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);


//Task List:
//1. xAdd in all necessary components and libary methods.
//2. xCreate a store that includes thunk and logger middleware support.
//3.xWrap the App component in a react-redux Provider element.
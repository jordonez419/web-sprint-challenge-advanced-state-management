import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';
import reducer from './reducers/index'



import "./index.css";
import App from "./App";

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>

        <App />
    </Provider>,
    rootElement
);

reportWebVitals();

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.
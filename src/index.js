import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from "./redux/rootReducer";

function loggerMiddleware(store) {
return function (next) {
return function (action) {
const result = next(action)
    console.log('middleware', store.getState());
    return result
}
}
}

const store = createStore(rootReducer,applyMiddleware(loggerMiddleware));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    app
    , document.getElementById('root'));
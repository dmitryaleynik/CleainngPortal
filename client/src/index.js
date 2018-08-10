import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider, } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './styles.css'
import rootReducer from './reducers/root'
import {configureFakeBackend} from './helpers/fakeBackend'
import {SERVER_URL} from './constants/index'

configureFakeBackend();

const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));


localStorage.setItem('users', JSON.stringify([{password: '111111', email: 'dima081197@yandex.ru'}]));




ReactDom.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
  
), document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as serviceWorker from './serviceWorker';
//import reducer here and put tem inside combineReducers
import userReducer from './redux/reducers/userReducer';
import thunk from 'redux-thunk';


const initialState = {};
const middleware = [thunk];


const rootReducer = combineReducers({
    posts: userReducer,
})

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        //above is for redux chrome extension
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

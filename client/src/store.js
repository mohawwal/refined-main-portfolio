import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk  from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';

import { mailReducer } from './helper/reducer/contactReducer';

const reducer = combineReducers({
    mail: mailReducer
});


const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

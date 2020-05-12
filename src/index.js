import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
// import reducerA from './store/reducerA';
// import reducerB from './store/reducerB';

// const rootReducer=combineReducers({
//     rA:reducerA,
//     rB:reducerB
// })
// const store = createStore(rootReducer);
const logAction= store=>{
    return next => {
        return action => {
            const result= next(action);
            console.log(`caught in middleware`,result);
            return result;
        }
    }
}
const store = createStore(reducer,applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

// Note : applyMiddleware is a functions that takes middleware to execute

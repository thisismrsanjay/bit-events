import {createStore, applyMiddleware, compose} from 'redux';
//configuring extension 
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer';

export const configureStore = (preloadedState)=>{
    const middlewares  = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const storeEnhancer = [middlewareEnhancer];

    const composedEnhancer = composeWithDevTools(...storeEnhancer);


//createStore take 3 argument reducer preloadedState enhancer
//reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.
//[preloadedState] (any): The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.
//[enhancer] (Function): The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is applyMiddleware().
    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    )

    if(process.env.NODE_ENV!== 'production'){
        if(module.hot){
            module.hot.accept('../reducers/rootReducer',()=>{
                const newRootReducer = require('../reducers/rootReducer').default;
                store.replaceReducer(newRootReducer);
            })
        }
    }
    return store;
}
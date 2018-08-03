import React from 'react';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

// components / reducers
import AppLayout from '../../layout/AppLayout/AppLayout';
import rootReducer from '../../reducers/index';


// initial store setup
const configureStore = (initialState) => {

    const enhancer = compose(
        applyMiddleware(
            logger
        )
    );
    return createStore(rootReducer, initialState, enhancer);
};

// create store
const store = configureStore({});

// wrap rest of the App in a provider
const AppContainer = () => (
    <Provider store={store}>
        <AppLayout />
    </Provider>
);

export default AppContainer;
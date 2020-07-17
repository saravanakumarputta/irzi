import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import UserContainer from './containers/usercontainer/UserContainer';
import AdminContainer from './containers/admincontainers/AdminContainer';

import testimonialReducer from './reducers/testimonialReducer';
import projectsReducer from './reducers/projectsReducer';
import popupLayerReducer from './reducers/popuplayer';
import userReducer from './reducers/userReducer';

let store = createStore(
	combineReducers({
		projects: projectsReducer,
		testimonials: testimonialReducer,
		popupLayer: popupLayerReducer,
		user: userReducer,
	}),
	applyMiddleware(logger, thunk)
);

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/admin">
						<AdminContainer />
					</Route>
					<Route path="/">
						<UserContainer />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;

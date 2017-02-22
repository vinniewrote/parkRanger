// webpack less
import './build/less/styles.less';

import 'babel-polyfill';

// react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store, { history } from './store';

// app container
import App from './build/components/App';
import Layout from './build/components/Layout';
import Discover from './build/components/Discover';
import ThemeParks from './build/components/ThemeParks';
import Journal from './build/components/Journal';
import Details from './build/components/Details';
import UserProfile from './build/components/UserProfile';
// render app
ReactDOM.render(
	<Provider store={store}>
			<Router history={history}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Discover}></IndexRoute>
					<Route path='/discover' component={Discover}></Route>
					<Route path='/parks' component={ThemeParks}></Route>
					<Route path='/parks/:parkId' component={Details}></Route>
					<Route path='/journal' component={Journal}></Route>
					<Route path='/profile' component={UserProfile}></Route>
		    </Route>
			</Router>
	</Provider>, document.getElementById('app')
);

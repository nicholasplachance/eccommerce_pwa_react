import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import React from 'react';
import ShopPage from './pages/shoppage/shop.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact={true} path='/' component={Homepage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;

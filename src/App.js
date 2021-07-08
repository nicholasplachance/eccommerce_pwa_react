import './App.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import React from 'react';
import ShopPage from './pages/shoppage/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact={true} path='/' component={Homepage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInAndSignUp} />
			</Switch>
		</div>
	);
}

export default App;

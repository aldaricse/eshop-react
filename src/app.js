// scripts
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Router } from 'react-router-dom';
import ReactRouter from './routes';
import history from './scripts/history';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// styles
import './styles/app.scss';

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			<ReactRouter/>
		</Router>
	</Provider>
	, document.getElementById('root'));






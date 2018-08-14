import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { App, AppWrapper } from './App';
import {Provider} from 'react-redux';


ReactDOM.render(
	<div>
		<Provider store={store}>
			<AppWrapper />
		</Provider>
	</div>, 
	document.getElementById('AppContainer')
)
import React           from 'react';
import ReactDOM        from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore } from 'redux'
import Main            from '_components/main';
import store           from '_app/store';

ReactDOM.render(
		<Provider store={store}>
			<Main/>
		</Provider>,
		document.getElementById('main-сontent')
);
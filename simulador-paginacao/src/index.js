import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyles />
        <App />
    </Provider>,
    document.getElementById('root')
);
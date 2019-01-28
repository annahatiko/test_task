import React from 'react';
import { render } from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';

export const store = configureStore();

render(React.createElement(App, { store }), document.getElementById('root'));

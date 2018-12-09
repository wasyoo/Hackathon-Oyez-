import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import App from './App';
import reducer from './Components/Reducers/PlatReducers';
import 'font-awesome/css/font-awesome.min.css';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

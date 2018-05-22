import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Search from './components/Search';

ReactDOM.render((
    <Router history={browserHistory} >
        <Route path='/' component={Search}/>
    </Router>
), document.getElementById('root'));
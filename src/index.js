import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { employees } from './employees';

ReactDOM.render(
            <CardList employees={employees}/>
, document.getElementById('root'));
serviceWorker.unregister();

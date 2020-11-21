import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FirstPerson from './FirstPerson'
import Photography from './Photography';
import Relation from './Relation';
import SecondPerson from './SecondPerson'
import Cooking from './Cooking';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

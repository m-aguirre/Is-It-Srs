import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import App from './src/components/App.jsx';

//ReactDOM.render(<App />, document.getElementById('app'));

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());

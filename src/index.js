import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    React.createElement('button', {
        onClick: () => console.log('CLICK')
    }, 'Stiskni tlačítko')
,
  document.getElementById('root')
);


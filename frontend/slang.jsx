import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
// import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});

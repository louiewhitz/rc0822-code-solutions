import React from 'react';
import ReactDOM from 'react-dom/client';
import StopWatchComponent from './stopwatch.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const watch = <StopWatchComponent />;

root.render(watch);

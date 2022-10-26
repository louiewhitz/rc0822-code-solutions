import React from 'react';
import ReactDOM from 'react-dom/client';
function CustomButton(props) {
  // eslint-disable-next-line react/no-unescaped-entities
  return <button>"Click Me!"</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const customButton = <CustomButton />;
root.render(customButton);

import React from 'react';
import ReactDOM from 'react-dom';

const mount = (el) => {
  ReactDOM.render(<h1>Hi there!</h1>, el);
};

// If we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.querySelector('#_marketing-dev-root');

  if (devRootEl) {
    mount(devRootEl);
  }
}

export { mount };

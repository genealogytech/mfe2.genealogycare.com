import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory
    ? createBrowserHistory()
    : createMemoryHistory();

  // We then create a memory history object and we tell
  // the memory history object that whenever the URL changes
  // whenever the path changes, we want to automatically
  // call the onNavigate function.
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.querySelector('#_auth-dev-root');

  if (devRootEl) {
    mount(devRootEl, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

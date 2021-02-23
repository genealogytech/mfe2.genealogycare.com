import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  // Run every time this component is
  // updated or changed in any way
  // The way we limit how often it executes
  // is with using the dependency array
  // [] - empty array (executes only one time)
  useEffect(() => {
    // Allow mount to get a DYNAMIC reference
    // to the existing rendered HTML element
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          // nextPathName
          // The path the Marketing App is trying
          // to navigate to.
          history.push(nextPathName);
        }
      },
    });

    // Everytime there's any change to our browser history,
    // we want to call onParentNavigate
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

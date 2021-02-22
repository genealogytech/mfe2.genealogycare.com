import { mount as marketingMount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    // Allow mount to get a DYNAMIC reference
    // to the existing rendered HTML element
    marketingMount(ref.current);
  }, []);

  return <div ref={ref} />;
};

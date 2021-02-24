import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// MUI
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

// Components
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

/**
 * Main App
 */
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <>
          <Header />
          <MarketingApp />
        </>
      </StylesProvider>
    </BrowserRouter>
  );
};

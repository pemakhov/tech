import React from 'react';
import Header from './Header';
import Footer from './Footer';

const withLayout = (WrappedComponent) => {
  return () => (
    <>
      <Header />
      <WrappedComponent />
      <Footer />
    </>
  );
};

export default withLayout;

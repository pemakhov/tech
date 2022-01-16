import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/@fortawesome/fontawesome-free/js/brands';
import '../node_modules/@fortawesome/fontawesome-free/js/solid';
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome';

const App = () => {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

return <Home />
};

export default App;

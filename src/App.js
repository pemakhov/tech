import React, { useState } from 'react';
import Home from './pages/Home/Home';
import SpecializationContext from './contexts/SpecializationContext';
import specializations from './constants/specializations';

const App = () => {
  const storageName = 'specialization';
  const defaultSpecialization = localStorage.getItem(storageName) || specializations.fullstack;
  const [specialization, setSpecialization] = useState(defaultSpecialization);

  const setAndStoreSpecialization = (spec) => {
    localStorage.setItem(storageName, spec);
    setSpecialization(spec);
  };

  return (
    <SpecializationContext.Provider value={{ specialization, setSpecialization: setAndStoreSpecialization }}>
      <Home />
    </SpecializationContext.Provider>
  );
};

export default App;

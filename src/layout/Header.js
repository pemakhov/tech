import React, { useContext } from 'react';
import SpecializationContext from '../contexts/SpecializationContext';
import specializations from '../constants/specializations';

const Header = () => {
  const { setSpecialization } = useContext(SpecializationContext);

  return (
    <header>
      <ul>
        <li>
          <button type="button" onClick={() => setSpecialization(specializations.fullstack)}>
            Fullstack
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setSpecialization(specializations.node)}>
            Node.js
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setSpecialization(specializations.react)}>
            React
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

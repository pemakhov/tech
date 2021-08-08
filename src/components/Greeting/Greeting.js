import React from 'react';
import greeting from '../../constants/greeting';
import './Greeting.scss';

const Greeting = () => (
  <section className="greeting">
    <div className="container">
      <div className="greeting__text">
        <h1>{greeting.main}</h1>
        <h2 className="greeting">{greeting.secondary}</h2>
      </div>
    </div>
  </section>
);

export default Greeting;

import React from 'react';
import greeting from '../../constants/greeting';
import './Greeting.scss';

const Greeting = () => (
  <>
    <section className="greeting">
      <div className="container">
        <div className="greeting__text">
          {greeting.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
    <div className="waves" />
  </>
);

export default Greeting;

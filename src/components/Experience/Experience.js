import React from 'react';
import PropTypes from 'prop-types';

const Experience = (props) => {
  const { record } = props;
  const { name, period, technologies, scope, result } = record;

  return (
    <section className="experience">
      <h3>{name}</h3>
      <div className="experience__period">{period}</div>
      <div className="experience__technologies">{technologies}</div>
      <div className="experience__job">{scope}</div>
      <div className="experience__result">{result}</div>
    </section>
  );
};

Experience.propTypes = {
  record: PropTypes.shape({
    name: PropTypes.string,
    period: PropTypes.string,
    technologies: PropTypes,
    scope: PropTypes.string,
    result: PropTypes.string,
  }).isRequired,
};

export default Experience;

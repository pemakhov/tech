import React from 'react';
import PropTypes from 'prop-types';

const Experience = (props) => {
  const { record } = props;
  const { period, job, technologies, result } = record;

  return (
    <section className="experience">
      <div className="experience__period">{period}</div>
      <div className="experience__job">{job}</div>
      <div className="experience__technologies">{technologies}</div>
      <div className="experience__result">{result}</div>
    </section>
  );
};

Experience.propTypes = {
  record: PropTypes.shape({
    period: PropTypes.string,
    job: PropTypes.string,
    technologies: PropTypes,
    result: PropTypes.string,
  }).isRequired,
};

export default Experience;

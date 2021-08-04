import React from 'react';
import PropTypes from 'prop-types';

const ExperienceBlock = (props) => {
  const { record } = props;
  const { name, period, technologies, scope, result } = record;

  return (
    <div>
      <h3>{name}</h3>
      <div className="experience__period">{period}</div>
      <div className="experience__technologies">{technologies}</div>
      <div className="experience__job">{scope}</div>
      <div className="experience__result">{result}</div>
    </div>
  );
};

ExperienceBlock.propTypes = {
  record: PropTypes.shape({
    name: PropTypes.string,
    period: PropTypes.string,
    technologies: PropTypes.string,
    scope: PropTypes.string,
    result: PropTypes.string,
  }).isRequired,
};

export default ExperienceBlock;

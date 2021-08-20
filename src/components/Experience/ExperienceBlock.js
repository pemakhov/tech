import React from 'react';
import PropTypes from 'prop-types';

const ExperienceBlock = (props) => {
  const { record } = props;
  const { name, period, technologies, scope, result } = record;

  return (
    <div className="experienceBlock">
      <h4>{name}</h4>
      <div className="experiencePeriod">{period}</div>
      <div className="experienceTechnologies">{technologies}</div>
      <div className="experienceJob">{scope}</div>
      <div className="experienceResult">{result}</div>
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

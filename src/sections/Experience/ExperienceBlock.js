import React from 'react';
import PropTypes from 'prop-types';

const ExperienceBlock = (props) => {
  const { record } = props;
  const { name, period, technologies, task, result } = record;

  return (
    <div className="experienceBlock">
      <h4>{name}</h4>
      <div className="experiencePeriod"><span>Period of development: </span>{period}</div>
      <div className="experienceTechnologies"><span>Used technologies: </span>{technologies}</div>
      <div className="experienceJob"><span>The task: </span>{task}</div>
      <div className="experienceResult"><span>The result: </span>{result}</div>
    </div>
  );
};

ExperienceBlock.propTypes = {
  record: PropTypes.shape({
    name: PropTypes.string,
    period: PropTypes.string,
    technologies: PropTypes.string,
    task: PropTypes.string,
    result: PropTypes.string,
  }).isRequired,
};

export default ExperienceBlock;

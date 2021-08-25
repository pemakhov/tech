import React from 'react';
import PropTypes from 'prop-types';

const ExperienceBlock = (props) => {
  const { record } = props;
  const { name, period, technologies, task, result } = record;

  return (
    <div className="experienceBlock">
      <h4>{name}</h4>
      <p className="experiencePeriod"><span>Period of development: </span>{period}</p>
      <p className="experienceTechnologies"><span>Used technologies: </span>{technologies}</p>
      <p className="experienceJob"><span>The task: </span>{task}</p>
      <p className="experienceResult"><span>The result: </span>{result}</p>
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

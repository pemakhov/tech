import React from 'react';
import PropTypes from 'prop-types';

const EducationBlock = (props) => {
  const { record } = props;
  const { course, organization, period, scope } = record;

  return (
    <div>
      <h4>{course}</h4>
      <div className="experience__period">{period}</div>
      <div className="experience__organization">{organization}</div>
      <div className="experience__scope">{scope}</div>
    </div>
  );
};

EducationBlock.propTypes = {
  record: PropTypes.shape({
    course: PropTypes.string,
    organization: PropTypes.string,
    period: PropTypes.string,
    scope: PropTypes.string,
  }).isRequired,
};

export default EducationBlock;

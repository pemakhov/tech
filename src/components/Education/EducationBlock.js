import React from 'react';
import PropTypes from 'prop-types';

const EducationBlock = (props) => {
  const { record } = props;
  const { course, organization, period, scope } = record;

  return (
    <div className="educationBlock">
      <h4>{course}</h4>
      <div className="educationPeriod">{period}</div>
      <div className="educationOrganization">Organization: {organization}</div>
      <div className="educationScope">Scope: {scope}</div>
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

import React from 'react';
import PropTypes from 'prop-types';

const EducationBlock = (props) => {
  const { record } = props;
  const { course, organization, period, scope, certificates } = record;

  return (
    <div className="educationBlock">
      <h4>{course}</h4>
      <div className="educationPeriod">
        <span>Period of time: </span>
        {period}
      </div>
      <div className="educationOrganization">
        <span>Organization: </span>
        {organization}
      </div>
      <div className="educationScope">
        <span>Scope: {scope}</span>
      </div>
      {certificates && <a href={certificates.link}>{certificates.title}</a>}
    </div>
  );
};

EducationBlock.propTypes = {
  record: PropTypes.shape({
    course: PropTypes.string,
    organization: PropTypes.string,
    period: PropTypes.string,
    scope: PropTypes.string,
    certificates: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
      }),
    ]),
  }).isRequired,
};

export default EducationBlock;

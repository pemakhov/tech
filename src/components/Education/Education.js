import React from 'react';
import PropTypes from 'prop-types';

const Education = (props) => {
  const { record } = props;
  const { course, organization, period, scope } = record;

  return (
    <section className="education">
      <h3>{course}</h3>
      <div className="experience__period">{period}</div>
      <div className="experience__organization">{organization}</div>
      <div className="experience__scope">{scope}</div>
    </section>
  );
};

Education.propTypes = {
  record: PropTypes.shape({
    course: PropTypes.string,
    organization: PropTypes.string,
    period: PropTypes.string,
    scope: PropTypes.string,
  }).isRequired,
};

export default Education;

import React from 'react';
import PropTypes from 'prop-types';
import EducationBlock from './EducationBlock';

const Education = (props) => {
  const { education } = props;

  return (
    <section className="education">
      <h2>Education</h2>
      {education.map((record) => (
        <EducationBlock record={record} key={record.course} />
      ))}
    </section>
  );
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      course: PropTypes.string,
      organization: PropTypes.string,
      period: PropTypes.string,
      scope: PropTypes.string,
    })
  ).isRequired,
};

export default Education;

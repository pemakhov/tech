import React from 'react';
import PropTypes from 'prop-types';
import EducationBlock from './EducationBlock';

const Education = (props) => {
  const { education } = props;

  return (
    <section className="education">
      <div className="container">
        <h3>Education</h3>
        {education.map((record) => (
          <EducationBlock record={record} key={record.course} />
        ))}
      </div>
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

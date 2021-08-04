import React from 'react';
import PropTypes from 'prop-types';
import ExperienceBlock from './ExperienceBlock';

const Experience = (props) => {
  const { experience } = props;

  return (
    <section className="experience">
      <h2>Experience</h2>
      {experience.map((record) => (
        <ExperienceBlock record={record} key={record.name} />
      ))}
    </section>
  );
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      period: PropTypes.string,
      technologies: PropTypes.string,
      scope: PropTypes.string,
      result: PropTypes.string,
    })
  ).isRequired,
};

export default Experience;

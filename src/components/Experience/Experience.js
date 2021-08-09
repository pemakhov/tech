import React from 'react';
import PropTypes from 'prop-types';
import ExperienceBlock from './ExperienceBlock';

const Experience = (props) => {
  const { experience } = props;

  return (
    <>
      <div id="waveExperience" className="wave" />
      <section className="experience">
        <div className="container">
          <h3>Experience</h3>
          {experience.map((record) => (
            <ExperienceBlock record={record} key={record.name} />
          ))}
        </div>
      </section>
    </>
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

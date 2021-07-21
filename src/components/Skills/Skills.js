import React from 'react';
import PropTypes from 'prop-types';

const Skills = (props) => {
  const { category, skills } = props;
  return (
    <section>
      <h3>{category}</h3>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

Skills.propTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skills;

import React from 'react';
import PropTypes from 'prop-types';

const SkillBlock = (props) => {
  const { category, skills } = props;
  return (
    <div>
      <h3>{category}</h3>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

SkillBlock.propTypes = {
  category: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillBlock;

import React from 'react';
import PropTypes from 'prop-types';
import SkillBlock from './SkillBlock';

const Skills = (props) => {
  const { skills } = props;
  return (
    <>
      <div id="waveSkills" className="wave" />
      <section className="skills">
        <div className="container">
          <h3>Skills<i className="fab fa-node" /></h3>
          <div className="skillsGrid">
            {skills.map((skill) => {
              const { name, data } = skill;
              return <SkillBlock category={name} skills={data} key={name} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default Skills;

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
          <h3>Skills</h3>
          <div className="skillsGrid">
            {skills.map((skill) => {
              const { name, awesomeIconClassName, data } = skill;
              return (
                <SkillBlock category={name} awesomeIconClassName={awesomeIconClassName} skills={data} key={name} />
              );
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
      awesomeIconClassName: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default Skills;

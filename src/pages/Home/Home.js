import React, { useState, useEffect, useContext } from 'react';
import SpecializationContext from '../../contexts/SpecializationContext';
import withLayout from '../../layout/withLayout';
import Skills from '../../components/Skills/Skills';
import AboutMe from '../../components/AboutMe/AboutMe';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';
import skills from '../../constants/skills';
import experience from '../../constants/experience';
import education from '../../constants/education';
import aboutMe from '../../constants/aboutMe';
import specializations from '../../constants/specializations';

const Home = () => {
  const { specialization } = useContext(SpecializationContext);
  const [currentSkills, setCurrentSkills] = useState(skills);
  useEffect(() => {
    const { node, react, database, ...restSkills } = skills;
    if (specialization === specializations.node) {
      setCurrentSkills({ node, database, react, ...restSkills });
    } else if (specialization === specializations.react) {
      setCurrentSkills({ react, node, database, ...restSkills });
    } else {
      setCurrentSkills({ node, react, database, ...restSkills });
    }
  }, [specialization]);

  return (
    <main>
      <div>
        <h2>About me</h2>
        <AboutMe paragraphs={aboutMe} />
      </div>
      <div>
        <h2>Experience</h2>
        {experience.map((record) => (
          <Experience record={record} key={record.name} />
        ))}
      </div>
      <div>
        <h2>Skills</h2>
        {Object.entries(currentSkills).map((skill) => {
          const { name, data } = skill[1];
          return <Skills category={name} skills={data} key={name} />;
        })}
      </div>
      <div>
        <h2>Education</h2>
        {education.map((record) => (
          <Education record={record} key={record.course} />
        ))}
      </div>
    </main>
  );
};

export default withLayout(Home);

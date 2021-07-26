import React from 'react';
import withLayout from '../../layout/withLayout';
import Skills from '../../components/Skills/Skills';
import AboutMe from '../../components/AboutMe/AboutMe';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';
import { skills } from '../../constants/skills';
import { experience } from '../../constants/experience';
import { education } from '../../constants/education';
import { aboutMe } from '../../constants/aboutMe';

const Home = () => {
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
        {Object.entries(skills).map((skill) => {
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

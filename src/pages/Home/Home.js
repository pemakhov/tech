import React from 'react';
import Greeting from '../../components/Greeting/Greeting';
import Skills from '../../components/Skills/Skills';
import AboutMe from '../../components/AboutMe/AboutMe';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';
import skills from '../../constants/skills';
import experience from '../../constants/experience';
import education from '../../constants/education';
import aboutMe from '../../constants/aboutMe';
import './Home.scss';

const Home = () => (
  <main>
    <Greeting />
    <AboutMe paragraphs={aboutMe} />
    <Experience experience={experience} />
    <section className="skills">
      <h2>Skills</h2>
      {Object.entries(skills).map((skill) => {
        const { name, data } = skill[1];
        return <Skills category={name} skills={data} key={name} />;
      })}
    </section>
    <Education education={education} />
  </main>
);

export default Home;

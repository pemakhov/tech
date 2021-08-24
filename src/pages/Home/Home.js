import React from 'react';
import Greeting from '../../sections/Greeting/Greeting';
import Skills from '../../sections/Skills/Skills';
import AboutMe from '../../sections/AboutMe/AboutMe';
import Experience from '../../sections/Experience/Experience';
import Education from '../../sections/Education/Education';
import Footer from '../../sections/Footer/Footer';
import skills from '../../constants/skills';
import Contacts from '../../sections/Contacts/Contacts';
import experience from '../../constants/experience';
import education from '../../constants/education';
import aboutMe from '../../constants/aboutMe';
import './Home.scss';

const Home = () => (
  <main>
    <Greeting />
    <AboutMe paragraphs={aboutMe} />
    <Experience experience={experience} />
    <Skills skills={Object.values(skills)} />
    <Education education={education} />
    <Contacts />
    <Footer />
  </main>
);

export default Home;

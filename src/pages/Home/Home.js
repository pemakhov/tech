import React from 'react';
import withLayout from '../../layout/withLayout';
import Skills from '../../components/Skills/Skills';
import Experience from '../../components/Experience/Experience';
import { skills } from '../../constants/skills';
import { experience } from '../../constants/experience';

const Home = () => {
  return (
    <>
      {experience.map((record) => (
        <Experience record={record} />
      ))}
      <div>
        {Object.entries(skills).map((skill) => {
          const { name, data } = skill[1];
          return <Skills category={name} skills={data} />;
        })}
      </div>
    </>
  );
};

export default withLayout(Home);

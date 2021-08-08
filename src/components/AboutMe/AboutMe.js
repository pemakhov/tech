import React from 'react';
import PropTypes from 'prop-types';
import './AboutMe.scss';

const AboutMe = (props) => {
  const { paragraphs } = props;

  return (
    <>
      <div id="waveAboutMe" className="wave" />
      <section className="aboutMe">
        <div className="container aboutMe">
          <h2 className="aboutMe">About me</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>
      </section>
    </>
  );
};

AboutMe.propTypes = PropTypes.arrayOf([PropTypes.string]).isRequired;

export default AboutMe;

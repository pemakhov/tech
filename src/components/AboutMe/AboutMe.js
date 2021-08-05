import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = (props) => {
  const { paragraphs } = props;

  return (
    <section className="aboutMe">
      <div className="container">
        <h2>About me</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 20)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

AboutMe.propTypes = PropTypes.arrayOf([PropTypes.string]).isRequired;

export default AboutMe;

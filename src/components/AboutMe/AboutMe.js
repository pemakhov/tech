import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = (props) => {
  const { paragraphs } = props;

  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 20)}>{paragraph}</p>
      ))}
    </>
  );
};

AboutMe.propTypes = PropTypes.arrayOf([PropTypes.string]).isRequired;

export default AboutMe;

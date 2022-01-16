import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import articlePath from '../../constants/aboutMe.md';

const AboutMe = () => {
  const [article, setArticle] = useState('');

  useEffect(() => {
    fetch(articlePath)
      .then((res) => res.text())
      .then((text) => setArticle(text))
  }, []);

  return (
    <section className="aboutMe">
      <div className="container aboutMe">
        <h3 className="aboutMe">About me</h3>
        <Markdown>{article}</Markdown>
        <div id="calipers" />
      </div>
    </section>
  );
};

export default AboutMe;

import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="footer">
      <div>Serhii Pemakhov, {year}</div>
    </section>
  );
};

export default Footer;

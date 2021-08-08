import React from 'react';
import contacts from '../../constants/contacts';

const Contacts = () => {
  return (
    <>
      <div id="waveContacts" className="wave" />
      <section className="contacts">
        <div className="container">
          <p>email: {contacts.email}</p>
          <p>telegram: {contacts.telegram}</p>
          <p>skype: {contacts.skype}</p>
        </div>
      </section>
    </>
  );
};

export default Contacts;

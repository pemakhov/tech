import React from 'react';
import contacts from '../../constants/contacts';

const Contacts = () => {
  return (
    <>
      <div id="waveContacts" className="wave" />
      <section className="contacts">
        <div className="container">
          <p>
            <span className="contactsIcon">
              <i className="fas fa-envelope fa-sm" />
            </span>
            {contacts.email}
          </p>
          <p>
            <span className="contactsIcon">
              <i className="fab fa-telegram-plane fa-sm" />
            </span>
            {contacts.telegram}
          </p>
          <p>
            <span className="contactsIcon">
              <i className="fab fa-skype fa-sm" />
            </span>
            {contacts.skype}
          </p>
        </div>
      </section>
    </>
  );
};

export default Contacts;

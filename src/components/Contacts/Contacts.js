import React from 'react';
import contacts from '../../constants/contacts';
import copyToClipboard from '../../helpers/helpers';

const Contacts = () => {
  return (
    <>
      <div id="waveContacts" className="wave" />
      <section className="contacts">
        <div className="container">
          <div>
            <span className="contactsIcon">
              <i className="fas fa-envelope fa-sm" />
            </span>
            <button className="contactsButton" type="button" onClick={() => copyToClipboard(contacts.email)}>
              {contacts.email}
            </button>
          </div>
          <div>
            <span className="contactsIcon">
              <i className="fab fa-telegram-plane fa-sm" />
            </span>
            <button className="contactsButton" type="button" onClick={() => copyToClipboard(contacts.telegram)}>
              {contacts.telegram}
            </button>
          </div>
          <div>
            <span className="contactsIcon">
              <i className="fab fa-skype fa-sm" />
            </span>
            <button className="contactsButton" type="button" onClick={() => copyToClipboard(contacts.skype)}>
              {contacts.skype}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;

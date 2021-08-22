import React from 'react';
import ContactsBlock from './ContactsBlock';
import contacts from '../../constants/contacts';

const Contacts = () => {
  return (
    <>
      <div id="waveContacts" className="wave" />
      <section className="contacts">
        <div className="container">
          {contacts.map((contact) => <ContactsBlock contact={contact} key={contact.name} />)}
        </div>
      </section>
    </>
  );
};

export default Contacts;

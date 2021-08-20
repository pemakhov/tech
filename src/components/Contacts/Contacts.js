import React from 'react';
import contacts from '../../constants/contacts';
import copyToClipboard from '../../helpers/helpers';

const Contacts = () => {
  const tooltipText = 'Click to copy';
  return (
    <>
      <div id="waveContacts" className="wave" />
      <section className="contacts">
        <div className="container">
          <div>
            <span className="contactsIcon">
              <i className="fas fa-envelope fa-sm" />
            </span>
            <button
              className="contactsButton hasTooltip"
              type="button"
              onClick={() => copyToClipboard(contacts.email)}
              tooltip-text={tooltipText}
            >
              {contacts.email}
            </button>
          </div>
          <div>
            <span className="contactsIcon">
              <i className="fab fa-telegram-plane fa-sm" />
            </span>
            <button
              className="contactsButton hasTooltip"
              type="button"
              onClick={() => copyToClipboard(contacts.telegram)}
              tooltip-text={tooltipText}
            >
              {contacts.telegram}
            </button>
          </div>
          <div>
            <span className="contactsIcon">
              <i className="fab fa-skype fa-sm" />
            </span>
            <button
              className="contactsButton hasTooltip"
              type="button"
              onClick={() => copyToClipboard(contacts.skype)}
              tooltip-text={tooltipText}
            >
              {contacts.skype}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;

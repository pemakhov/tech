import React from 'react';
import PropTypes from 'prop-types';
import copyToClipboard from '../../helpers/helpers';

const ContactsBlock = (props) => {
  const { contact } = props;
  const { name, resource, awesomeIconClassName, prompt } = contact;
  return (
    <div>
      <span className="contactsIcon">
        <i className={`${awesomeIconClassName} fa-sm`} />
      </span>
      <button
        className="contactsButton hasTooltip"
        type="button"
        onClick={() => copyToClipboard(resource)}
        tooltip-text={prompt}
      >
        {name}
      </button>
    </div>
  );
};

ContactsBlock.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    resource: PropTypes.string,
    awesomeIconClassName: PropTypes.string,
    prompt: PropTypes.string,
  }).isRequired,
};

export default ContactsBlock;

import React from 'react';
import PropTypes from 'prop-types';
import copyToClipboard from '../../helpers/helpers';

const ContactsBlock = (props) => {
  const { contact } = props;
  const { name, resource, awesomeIconClassName, prompt, type } = contact;
  return (
    <div>
      <span className="contactsIcon">
        <i className={`${awesomeIconClassName} fa-sm`} />
      </span>
      {type === 'button' ? (
        <button
          className="contactsButton hasTooltip"
          type="button"
          onClick={() => copyToClipboard(resource)}
          tooltip-text={prompt}
        >
          {name}
        </button>
      ) : (
        <a className="contactsLink hasTooltip" href={resource} tooltip-text={prompt}>
          {name}
        </a>
      )}
    </div>
  );
};

ContactsBlock.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    resource: PropTypes.string,
    awesomeIconClassName: PropTypes.string,
    prompt: PropTypes.string,
    type: PropTypes.oneOf(['button', 'link']),
  }).isRequired,
};

export default ContactsBlock;

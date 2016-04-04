import React, {PropTypes} from 'react';

export const USER_SHAPE = PropTypes.shape({
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
  // id: PropTypes.string.isRequired
}).isRequired

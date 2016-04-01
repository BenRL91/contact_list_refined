//Contact Details Page//
import React, {PropTypes} from 'react';
import {USER_SHAPE} from './user_shape';

export default class ContactDetails extends React.Component {
  static propTypes = {
    user: USER_SHAPE,
    goBack: PropTypes.func.isRequired
  };
  render() {
    let {user, goBack} = this.props
    return (
      <div className='contact-details'>
        <div className='top'>
          <button onClick={goBack}></button>
          <img src={user.imageURL} alt={user.name}/>
        </div>
        <ul>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.number}</li>
          <li>{user.location}</li>
        </ul>
      </div>

    );
  }
}

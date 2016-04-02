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
          <button onClick={goBack}>
            <i className="fa fa-arrow-left"/>
          </button>
          <img src={user.imageURL} alt={user.name}/>
        </div>
        <ul>
          <li>
          <i className="fa fa-user"/>
          {user.name}
          </li>
          <li>
          <i className="fa fa-envelope"/>
          {user.email}
          </li>
          <li>
          <i className="fa fa-mobile"/>
          {user.number}
          </li>
          <li>
          <i className="fa fa-globe"/>
          {user.location}
          </li>
        </ul>
      </div>

    );
  }
}

//Contact Details Page//
import React, {PropTypes} from 'react';
import {USER_SHAPE} from './user_shape';

export default class ContactDetails extends React.Component {
  static propTypes = {
    user: USER_SHAPE,
    goBack: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired
  };
  clickHandler(){
    console.log(this.props.user.imageURL)
    let {editContact} = this.props
    editContact(this.props.user)
  }
  render() {
    let {user, goBack, editContact} = this.props
    return (
      <div className='contact-details'>
        <div className='top'>
          <button onClick={goBack}>
            <i className="fa fa-arrow-left"/>
          </button>
          <button className='edit' onClick={::this.clickHandler}>Edit</button>
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

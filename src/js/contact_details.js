//Contact Details Page//
import React, {PropTypes} from 'react';
import {USER_SHAPE} from './user_shape';
import { Link, hashHistory} from 'react-router';
import info from './contacts_data';
export default class ContactDetails extends React.Component {
  // static propTypes = {
  //   user: USER_SHAPE,
  //   goBack: PropTypes.func.isRequired,
  //   editContact: PropTypes.func.isRequired
  // };
  clickHandler(){
    // let {editContact} = this.props
    // editContact(this.props.user)
  }

  render() {
    let {id} = this.props.params;
      let userCheck = info.filter(function(userInfo){
        //  console.log(userInfo)
        //  console.log(userInfo.id)
        //  console.log(id)
      if (userInfo.id === id){
        return userInfo
      }
    })
    // let {user, goBack, editContact} = this.props
let user = userCheck.pop()
    return (
      <div className='contact-details'>
        <div className='top'>
            <Link to='/'><button><i className="fa fa-arrow-left"/></button></Link>
          {/*<Link to='/edit'><button className='edit'>Edit</button></Link>*/}
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

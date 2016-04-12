//Contact List Page//
import React, {Component, PropTypes} from 'react';
// import { Link }  from 'react-router';
import info from './contacts_data';
import {Link, hashHistory} from 'react-router';

export default class ContactList extends Component {
  // static propTypes = {
  //   info: PropTypes.array.isRequired,
  //   onContactSelect: PropTypes.func.isRequired,
  //   setContactDetails: PropTypes.func.isRequired,
  //   removeCon: PropTypes.func.isRequired
  // };
  makeListItem(user){
    // let {onContactSelect, removeCon} = this.props

    return (
      <div className="conWrapper" key={user.imageURL}>
        <Link to={`/contact/${user.id}`}><li key={user.name}>
          <img src={user.imageURL}/>
          {user.name}
        </li>
        </Link>
        <button key={user.number}>X</button>
      </div>
    )}
  render() {
    // let {info, setContactDetails} = this.props
    return (
      <div className='contact-list'>
        <h1>My Murrays</h1>
        <Link to='/new'>Add New Contact</Link>
        <ul>
          {info.map(::this.makeListItem)}
        </ul>
      </div>
    );
  }
}

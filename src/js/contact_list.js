//Contact List Page//
import React, {Component, PropTypes} from 'react';

export default class ContactList extends Component {
  static propTypes = {
    info: PropTypes.array.isRequired,
    onContactSelect: PropTypes.func.isRequired
  };
  makeListItem(user){
    let {onContactSelect} = this.props

    return (
      <li onClick={onContactSelect.bind(null, user)}>
        <img src={user.imageURL}/>
        {user.name}
      </li>
    )}
  render() {
    let {info} = this.props
    return (
      <div className='contact-list'>
        <ul>
          {info.map(::this.makeListItem)}
        </ul>
      </div>
    );
  }
}

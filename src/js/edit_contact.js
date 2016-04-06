import React, {PropTypes} from 'react';
import {USER_SHAPE} from './user_shape';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class EditContact extends React.Component {
  static propTypes = {
    user: USER_SHAPE,
    onCancel: PropTypes.func.isRequired,
    saveContact: PropTypes.func.isRequired
  };
  constructor(user, onCancel, saveContact){
    super(user, onCancel, saveContact)
      this.state = {
          editedUser: this.props.user
  }
}
clickHandler(){
  let {user, onCancel} = this.props
  onCancel(user)
}
dropHandler([file]){
  this.setState({
    user: {
      imageURL: file.preview
    }
  })
}
dataHandler(editedUser){
  let { user, saveContact } = this.props
  this.setState({
    user: editedUser
  })
  saveContact(user, editedUser)
}
  render() {
    let {user, onCancel} = this.props
    let {editedUser} = this.state
    return (
      <div className='form-wrapper'>
        <SimpleSerialForm onData={::this.dataHandler} className='contact-details'>
          <div className='top'>
              <Dropzone className='dropzone' onDrop={::this.dropHandler}>
                <img className='previewImage' src={user.imageURL}/>
              </Dropzone>
          </div>
          <ul>
            <li>
            <i className="fa fa-user"/>
              <input
                type='text'
                name='name'
                placeholder={user.name}
                defaultValue={user.name}/>
            </li>
            <li>
            <i className="fa fa-envelope"/>
              <input
                type='text'
                name='email'
                placeholder={user.email}
                defaultValue={user.email}/>
            </li>
            <li>
            <i className="fa fa-mobile"/>
              <input
                type='text'
                name='number'
                placeholder={user.number}
                defaultValue={user.number}/>
            </li>
            <li>
            <i className="fa fa-globe"/>
              <input
                type='text'
                name='location'
                placeholder={user.location}
                defaultValue={user.location}/>
            </li>
          </ul>
          <input
            value={editedUser.imageURL}
            type='hidden'
            name='imageURL'/>
          <button>Save Contact</button>
        </SimpleSerialForm>
        <button onClick={::this.clickHandler}>Cancel</button>
      </div>
    );
  }
}

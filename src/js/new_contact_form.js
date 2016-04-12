import React, {Component, PropTypes} from 'react';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';
import info from './contacts_data';
import { Link, hashHistory} from 'react-router';

export default class NewContactForm extends Component {

  // static propTypes = {
  //   addToContacts: PropTypes.func.isRequired,
  //   onCancel: PropTypes.func.isRequired
  // }
  constructor(addToContacts, onCancel){
    super(addToContacts, onCancel)
      this.state = {
        preview: "../images/dropzoneHolder.png"
      }
  }
  dropHandler([file]){
    this.setState({
      preview: file.preview
    })
  }
  dataHandler(data){
    info.push(data);
    hashHistory.push('/');

  }
    // dataHandler(newUser){
    //   let {addToContacts, onCancel} = this.props
    //   if (newUser.name
    //   && newUser.email
    //   && newUser.number
    //   && newUser.location
    //   && newUser.imageURL){
    //     addToContacts(newUser)
    //   }else {
    //     alert('All fields are required.')
    //   }
  // }
  render() {
    // let {addToContacts, onCancel} = this.props
    return (
      <div className='newConWrapper'>
        <SimpleSerialForm className='ssf' onData={::this.dataHandler}>
          <h1>Add New Murray</h1>
          <Dropzone className='dropzone' onDrop={::this.dropHandler}>
            <img className='previewImage' src={this.state.preview}/>
          </Dropzone>
          <input value={this.state.preview} type='hidden' name='imageURL'/>
          <label>
            Full Name:
            <input type='text' name='name'/>
          </label>
          <label>
            E-mail:
            <input type='text' name='email'/>
          </label>
          <label>
            Phone:
            <input type='text' name='number'/>
          </label>
          <label>
            Location:
            <input type='text' name='location'/>
          </label>
          <button>Create Contact</button>
        </SimpleSerialForm>
        <Link to='/'>Cancel</Link>
      </div>
    );
  }
}

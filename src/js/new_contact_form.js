import React, {Component, PropTypes} from 'react';
import SimpleSerialForm from 'react-simple-serial-form';
import Dropzone from 'react-dropzone';

export default class NewContactForm extends Component {

  static propTypes = {
    addToContacts: PropTypes.func.isRequired
  }
  constructor(addToContacts){
    super(addToContacts)
      this.state = {
        preview: "../images/dropzoneHolder.png"
      }
  }
  dropHandler([file]){
    this.setState({
      preview: file.preview
    })
  }
  render() {
    let {addToContacts} = this.props
    return (
      <SimpleSerialForm className='ssf' onData={addToContacts}>
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
    );
  }
}

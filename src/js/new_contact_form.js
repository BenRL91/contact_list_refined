import React, {Component, PropTypes} from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class NewContactForm extends Component {

  static propTypes = {
    addToContacts: PropTypes.func.isRequired
  }
  render() {
    let {addToContacts} = this.props
    return (
      <SimpleSerialForm onData={addToContacts}>
        <label>
          Full Name:
          <input type='text' name='name'/>
        </label>
        <br/>
        <label>
          E-mail:
          <input type='text' name='email'/>
        </label>
        <br/>
        <label>
          Phone:
          <input type='text' name='number'/>
        </label>
        <br/>
        <label>
          Location:
          <input type='text' name='location'/>
        </label>
        <br/>
        <label>
          Image URL:
          <input type='text' name='imageURL'/>
        </label>
        <br/>
        <button>Create Contact</button>
        {/*<button onClick={goBack}>Go Back</button>*/}
      </SimpleSerialForm>
    );
  }
}

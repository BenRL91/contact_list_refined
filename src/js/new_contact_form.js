import React, {Component, PropTypes} from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class NewContactForm extends Component {

  static propTypes = {
    addToContacts: PropTypes.func.isRequired
  }
  render() {
    let {addToContacts} = this.props
    return (
      <SimpleSerialForm className='ssf' onData={addToContacts}>
        <h1>Add New Murray</h1>
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
        <label>
          Image URL:
          <input type='text' name='imageURL'/>
        </label>
        <button>Create Contact</button>
        {/*<button onClick={goBack}>Go Back</button>*/}
      </SimpleSerialForm>
    );
  }
}

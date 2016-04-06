//Javascript Entry Point//
import React from 'react';
import ReactDOM from 'react-dom';
import ContactDetails from './contact_details';
import ContactList from './contact_list';
import CONTACTS_DATA from './contacts_data';
import NewContactForm from './new_contact_form';
import EditContact from './edit_contact';

function renderContactDetails(user){
  ReactDOM.render(
  <ContactDetails
  user={user}
  goBack={renderContactList}
  editContact={renderEdit}/>,
  document.querySelector('.app')
)}

function alphabetize(a, b) {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }else if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else {
    return 0
  };
};

function renderContactList(){
  CONTACTS_DATA.sort(alphabetize)
  ReactDOM.render(
  <ContactList
  info={CONTACTS_DATA}
  onContactSelect={renderContactDetails}
  setContactDetails={newContactDetails}
  removeCon={removeContact}
  />,
  document.querySelector('.app')
)}

function addNewContact(newContact){
  CONTACTS_DATA.push(newContact);
  CONTACTS_DATA.sort(alphabetize)
  renderContactList();
}

function newContactDetails(){
  ReactDOM.render(
    <NewContactForm
      addToContacts={addNewContact}
      onCancel={renderContactList}/>,
    document.querySelector('.app')
  )
}

function removeContact(user){
  let answer = confirm('Are you sure you want to remove this?')
  if (answer === true){
  var x = CONTACTS_DATA.indexOf(user)
  CONTACTS_DATA.splice(x, 1);
  CONTACTS_DATA.sort(alphabetize)
  renderContactList();
  }
}

function renderEdit(user){
  ReactDOM.render(
    <EditContact
    user={user}
    onCancel={renderContactDetails}
    saveContact={saveAndRender}/>,
    document.querySelector('.app')
  )
}

function saveAndRender(user, editedUser){
  var x = CONTACTS_DATA.indexOf(user)
  CONTACTS_DATA.splice(x, 1)
  CONTACTS_DATA.push(editedUser)
  CONTACTS_DATA.sort(alphabetize)
  renderContactDetails(editedUser)
}
renderContactList()

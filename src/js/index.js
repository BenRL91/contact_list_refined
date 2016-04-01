//Javascript Entry Point//
import React from 'react';
import ReactDOM from 'react-dom';
import ContactDetails from './contact_details';
import ContactList from './contact_list';
import CONTACTS_DATA from './contacts_data';

let user = {
  imageURL: 'http://fillMurray.com/1100/1100',
  name: 'JD Isaacks',
  email: 'jd@theironyard.com',
  number: '555-123-4566',
  location: 'Atlanta, GA',
  id: 'AB123'
}
function tempFunc(){
  alert('dude');
}

function renderContactDetails(user){
  ReactDOM.render(
  <ContactDetails
  user={user}
  goBack={renderContactList}
  />,
  document.querySelector('.app')
)}

function renderContactList(){
  ReactDOM.render(
  <ContactList
  info={CONTACTS_DATA}
  onContactSelect={renderContactDetails}
  />,
  document.querySelector('.app')
)}

renderContactList()

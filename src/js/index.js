//Javascript Entry Point//
import React from 'react';
import ReactDOM from 'react-dom';
import ContactDetails from './contact_details';
import ContactList from './contact_list';
import CONTACTS_DATA from './contacts_data';

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

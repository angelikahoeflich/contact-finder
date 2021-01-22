import React, {useReducer} from 'react'
import uuid from 'uuid';
import ContactContent from './ContactContext';
import contactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const intitialState = {
    contacts: [
      {
        id:1,
        name:"angelika",
        email: "angelika@test.com",
        phone: "1234543",
        type: "personal"
      },
      {
        id:2,
        name:"bobby",
        email: "bobby@test.com",
        phone: "6543245",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, intitialState)

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update the contact

  // Filter contacts

  // Clear filter 

  return (
    <ContactContent.Provider>
      value={{
        contacts: state.contacts
      }}
      {props.children}
    </ContactContent.Provider>
  )
}

export default ContactState
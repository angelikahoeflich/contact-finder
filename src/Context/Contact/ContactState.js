import React, {useReducer} from 'react'
import {v4 as uuid} from "uuid"; 
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
        id:3,
        name:"bobby",
        email: "angelika@test.com",
        phone: "1234543",
        type: "professional"
      },
      {
        id:2,
        name:"hello",
        email: "hello@test.com",
        phone: "6543245",
        type: "personal"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, intitialState)

  // Add contact

  const addContact = contact => {
     contact.id = uuid()
     dispatch({type: ADD_CONTACT, payload: contact})
  }


  // Delete contact

  const deleteContact = id => {
    dispatch({type: DELETE_CONTACT, payload: id})
 }

  // Set current contact

  const setCurrent = contact => {
    dispatch({type: SET_CURRENT, payload: contact})
 }
  // Clear current contact

  const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT})
 }
  // Update the contact

  const updateContact = contact => {
    dispatch({type: UPDATE_CONTACT, payload: contact})
 }
  // Filter contacts

  // Clear filter 

  return (
    <ContactContent.Provider 
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact

      }}>
      {props.children}
    </ContactContent.Provider>
  )
}

export default ContactState
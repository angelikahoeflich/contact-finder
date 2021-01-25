import React, {useContext, Fragment} from 'react'
import ContactContext from '../../Context/Contact/ContactContext';
import ContactItem from './ContactItem';


const Contacts = () => {

  const contactContext = useContext(ContactContext);
  console.log(contactContext)
  const {contacts} = contactContext;



  return (
    <Fragment>
      {contacts.map(contact => (<ContactItem key={contact.id}
      contact={contact}
      />))}
    </Fragment>
  )
}

export default Contacts
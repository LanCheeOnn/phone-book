import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import LoadingIcons from 'react-loading-icons'

const Home = () => {
  const [contacts, setContacts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  }

  useEffect(() => {
    fetch('http://localhost:8000/contacts')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setContacts(data);
        setIsLoading(false);
      })
  }, [])

  return (
    <div className="home">
      {isLoading && <div className="Loading"><LoadingIcons.TailSpin
        height="4em"
        fill="#06bcee"
        stroke="#06bcee"
        speed={1.5}
      />
        <p>Loading...</p>
      </div>}
      {contacts && <ContactList contacts={contacts} title="Contacts:" handleDelete={handleDelete}/>}
    </div>
  )
}
 
export default Home;
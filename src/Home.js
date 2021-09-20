import { useState, useEffect } from 'react';
import ContactList from './ContactList';
import LoadingIcons from 'react-loading-icons'

const Home = () => {
  const [contacts, setContacts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  }

  useEffect(() => {
    // Retrieves Data from json
    fetch('http://localhost:8000/contacts')
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
        return res.json();
      })
      .then(data => {
        setContacts(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      })
  }, [])

  return (
    <div className="home">
      {/* If error, it will be outputted. */}
      {error && <div>{error}</div>}
      {/* If Fetching data takes time, will show a loading icon and message */}
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
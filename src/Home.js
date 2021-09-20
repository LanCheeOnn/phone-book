import ContactList from './ContactList';
import LoadingIcons from 'react-loading-icons'
import useFetch from './useFetch';

const Home = () => {
  const { data: contacts, isLoading, error } = useFetch('http://localhost:8000/contacts');

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
      {contacts && <ContactList contacts={contacts} title="Contacts:"/>}
    </div>
  )
}
 
export default Home;